<?php

namespace App\Http\Controllers\API\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;

/**
 * Class RolesController
 * @package App\Http\Controllers\API\Admin
 */
class RolesController extends Controller
{
    /**
     * Get all roles from the roles table
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Role::all(),200);
    }
}
