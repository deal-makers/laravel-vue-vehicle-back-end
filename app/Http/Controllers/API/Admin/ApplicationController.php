<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

class ApplicationController extends Controller
{
    public function __invoke()
    {
        return view('application');
    }
}
