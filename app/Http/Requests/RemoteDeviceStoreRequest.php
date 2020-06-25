<?php

namespace App\Http\Requests;

use App\Models\RemoteIOTDevice;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class RemoteDeviceStoreRequest
 * @package App\Http\Requests
 */
class RemoteDeviceStoreRequest extends FormRequest
{
    /**
     * Table Name for RemoteIOTDevice Model
     */
    const TABLE = 'remote_i_o_t_devices';

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'device_id' => ['required', 'min:6', Rule::unique(self::TABLE, 'device_id')->ignore($this->id)],
            'auth_code' => ['required', 'min:6', Rule::unique(self::TABLE, 'auth_code')->ignore($this->id)],
            'name' => 'required|min:3',
            'device_group_id' => 'required|exists:device_groups,id',
            'role_id' => 'required|exists:roles,id',
            'active' => 'required|boolean',
            'description' => 'nullable|string'
        ];
    }


    /**
     * @param $device
     * @return RemoteIOTDevice
     */
    public function createOrUpdateDevice($device): RemoteIOTDevice
    {
        $device->name = $this->name;
        $device->device_id = $this->device_id;
        $device->device_group_id = $this->device_group_id;
        $device->auth_code = $this->auth_code;
        $device->description = $this->description;
        $device->active = $this->active;
        $device->save();

        return $device;
    }
}
