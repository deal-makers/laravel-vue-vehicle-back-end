<?php

namespace App\Http\Controllers\API\RPI;

use App\Http\Controllers\Controller;
use App\Models\DeviceAttribute;
use App\Models\RemoteDevicePulse;
use Illuminate\Http\Request;

class PulseController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function __invoke(Request $request)
    {
        $this->validate($request, ['description' => 'required|string']);

        RemoteDevicePulse::create([
            'device_id' => DeviceAttribute::reportedBy($request->api_token),
            'description' => $request->input('description')
        ]);

        return response()->json(['Message' => 'Pulse saved successfully!']);
    }
}
