<?php

namespace App\Http\Requests;

use App\Models\Device;
use App\Models\DeviceType;
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
     * @param $id
     * @return Device
     */
    public function save($id): Device
    {
        $device_type_id = $this->getDeviceType();

        $device = $this->getDevice($id);
        $device->name = $this->name;
        $device->device_id = $this->device_id;
        $device->device_group_id = $this->device_group_id;
        $device->description = $this->description;
        $device->device_type_id = $device_type_id;
        $device->save();

        return $device;
    }

    /**
     * @param $id
     * @return Device
     */
    private function getDevice($id): Device
    {
        return $this->method() == 'POST' ? new Device() : Device::findOrFail($id);
    }

    /**
     * @return mixed
     */
    private function getDeviceType()
    {
        return DeviceType::firstOrCreate([
            'attributes' => [
                'auth_code' => $this->auth_code,
                'active' => $this->active
            ]
        ]);
    }
}
