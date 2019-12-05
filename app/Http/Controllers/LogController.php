<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Log;

class LogController extends Controller
{
	/**
	* Get Device Log file
	*
	* @param $device_id
	* @param Request $request
	* @return FILE
	*
	**/
    public function getLogByDeviceRfid(Request $request, $device_id)
    {
    	try {
	    	$logs = Log::where('device_id', $device_id)->orderBy('reported_at', 'DESC')->get();

	    	if(count($logs) < 1) {
	    		return response()->json([
	    			'Message' => 'No data.'
	    		], 404);
	    	} else {
	    		return response()->json($logs, 201);
	    	}

    	} catch(\Exception $e) {
    		return response()->json([
    			'message' => 'Error handling request!',
    			'error' => $e->getMessage()
    		], 500);
    	}
    }

	/**
	* Store device Log file
	*
	* @param $log
	* @return Response\Json 
	*
	**/
    public function storeLogData($log)
    {
    	try {
	    	$newLog = new Log();
	    	$newLog->group_id = $log->group_id;
	    	$newLog->device_rfid = $log->device_rfid;
	    	$newLog->reported_by = ''; // this needs to be defined, incoming request identifier
	    	$newLog->reported_at = $log->reported_at;
	    	$newLog->save();

	    	return response()->json([
    			'message' => 'Log saved successfully!',
    			'status_code' => 201
    		], 201);
    		
	    } catch(\Exception $e) {
	    	return response()->json([
	    		'message' => 'Log not saved!',
	    		'error' => $e->getMessage()
	    	], 500);
	    }
    }
}
