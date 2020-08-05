<?php

namespace App\Http\Controllers\API\RPI;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AlertController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'status' => 'required|in:Ok,Error',
            'detail' => 'required|string',
        ]);

        $status = $request->input('status');
        $detail = $request->input('detail');

        return response()->json(['Message' => 'Alert received successfully!']);
    }
}
