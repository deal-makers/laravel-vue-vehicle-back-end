<?php

namespace App\Http\Requests;

use App\Models\Device;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class RemoteDeviceStoreRequest
 * @package App\Http\Requests
 */
class RemoteDeviceStoreRequest extends FormRequest
{
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
            'device_id' => ['required', 'min:6', Rule::unique('devices', 'device_id')->ignore($this->id)],
            'auth_code' => ['required', 'min:6', Rule::unique('device_attributes', 'value')
                ->where('name', 'auth_code')->ignore($this->id, 'device_id')],
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
        $device = $this->getDevice($id);
        $device->name = $this->name;
        $device->device_id = $this->device_id;
        $device->device_group_id = $this->device_group_id;
        $device->description = $this->description;
        $device->save();

        $this->saveDeviceAttributes($device);

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
     * @param $device
     * @return mixed
     */
    private function getDeviceType($device)
    {
        if ($deviceType = $device->deviceType()->first()) return $deviceType;

        return $device->deviceType()->create([
            'name' => 'RFID Reader Compute Module',
            'attributes' => [
                'auth_code' => 'unique_string',
                'active' => 'boolean'
            ]
        ]);
    }

    /**
     * @param $device
     */
    private function saveDeviceAttributes($device): void
    {
        $deviceType = $this->getDeviceType($device);

        foreach ($deviceType->attributes as $attribute => $value) {

            $device->attributes()->updateOrCreate(
                ['name' => $attribute],
                ['value' => $this->get($attribute)]
            );
        }
    }
}
