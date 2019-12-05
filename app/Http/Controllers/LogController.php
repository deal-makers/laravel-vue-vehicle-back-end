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
	* @param Request $request
	* @return Response\Json 
	*
	**/
    public function storeLogData(Request $request)
    {
    	try {
	    	$newLog = new Log();
	    	$newLog->group_id = $request->group_id;
	    	$newLog->device_id = $request->device_id;
	    	$newLog->event_desc = $request->event_description;
	    	$newLog->reported_by = 1;
	    	$newLog->reported_at = \Carbon\Carbon::parse($request->reported_at);
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
