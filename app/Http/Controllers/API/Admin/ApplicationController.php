<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;

class ApplicationController extends Controller
{
    public function __invoke()
    {
        return view('application');
    }
}
