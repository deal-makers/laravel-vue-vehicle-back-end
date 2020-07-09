<?php

namespace App\Http\Middleware;

use App\Models\Device;
use App\Models\DeviceAttribute;
use App\Models\User;
use Closure;

class CheckApiToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!($api_token = $request->get('api_token'))) {
            return response()->json([
                'Error' => 'Not allowed. You must provide valid auth credentials.'
            ], 401);
        }

        $checkUser = User::checkApiToken($api_token);
        $checkDevice = DeviceAttribute::checkApiToken($api_token);

        if(!$checkUser && !$checkDevice) {
            return response()->json([
                'Error' => 'Not allowed. API auth failed.'
            ], 401);
        }

        return $next($request);
    }
}
