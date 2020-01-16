<?php


namespace App\Exporters;


class LogExporter
{
    private $dateFrom;
    private $dateTo;
    private $deviceGroup;
    private $device;

    public function __construct($dateFrom, $dateTo, $deviceGroup, $device)
    {
        $this->dateFrom = $dateFrom;
        $this->dateTo = $dateTo;
        $this->deviceGroup = $deviceGroup;
        $this->device = $device;
    }

    public static function exportCsv()
    {

    }
}
