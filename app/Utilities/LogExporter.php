<?php


namespace App\Utilities;


use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Symfony\Component\HttpFoundation\StreamedResponse;

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

    /**
     * @param $logs
     * @return StreamedResponse
     * @throws \PhpOffice\PhpSpreadsheet\Exception
     */
    public function exportCsv($logs)
    {
        // Initiate new spreadsheet
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        // sheet name
        $sheet->setTitle("Logs Report");

        // handle
        $this->handleSyles($spreadsheet);

        //starting row
        $row = 5;

        foreach($logs as $log) {
            $this->writeDataToRows($spreadsheet, $row, $log);
            $row++;
        }

        // Create Xls file
        $writer = new Xlsx($spreadsheet);

        // Prepare response
        $response = new StreamedResponse(
            function () use ($writer) {
                $writer->save('php://output');
            }
        );

        $filename = 'test';

        // Set headers and file name
        $response->headers->set('Content-Type', 'application/vnd.ms-excel');
        $response->headers->set('Content-Disposition', 'attachment;filename='.$filename);
        $response->headers->set('Cache-Control', 'max-age=0');

        return $response;
    }

    private function writeDataToRows($spreadsheet, $row, $log)
    {
        $parsedLog = json_decode($log);
        // Write data to cells
        $spreadsheet->getSheetByName("Logs Report")
            ->setCellValue("A" . $row , $parsedLog->id)
            ->setCellValue("B" . $row , $parsedLog->device->device_group->name)
            ->setCellValue("C" . $row , $parsedLog->device->name)
            ->setCellValue("D" . $row , $parsedLog->event_desc)
            ->setCellValue("E" . $row , $parsedLog->reported_by)
            ->setCellValue("F" . $row , $parsedLog->reported_at);

        return $spreadsheet;
    }

    private function handleSyles($spreadsheet)
    {
        // Set font
        $spreadsheet->getDefaultStyle()->getFont()->setName("Arial")->setSize(10);

        // Set heading
        $spreadsheet->getActiveSheet()->setCellValue("A1", "Logs Report");
        $spreadsheet->getActiveSheet()->mergeCells("A1:F1");
        $spreadsheet->getActiveSheet()->getStyle("A1")->getFont()->setBold(true);
        $spreadsheet->getActiveSheet()->getStyle("A1")->getFont()->setSize(20);
        $spreadsheet->getActiveSheet()->getRowDimension("1")->setRowHeight(25);
        $spreadsheet->getActiveSheet()->getStyle("A1")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);


        // set columns width
        $spreadsheet->getActiveSheet()->getColumnDimension("A")->setWidth(5);
        $spreadsheet->getActiveSheet()->getColumnDimension("B")->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension("C")->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension("D")->setWidth(25);
        $spreadsheet->getActiveSheet()->getColumnDimension("E")->setWidth(15);
        $spreadsheet->getActiveSheet()->getColumnDimension("F")->setWidth(20);

        $spreadsheet->getActiveSheet()->getRowDimension("4")->setRowHeight(25);
        $spreadsheet->getActiveSheet()->getStyle('A4:F4')->getAlignment()->setVertical(Alignment::HORIZONTAL_CENTER);

        $spreadsheet->getActiveSheet()->getStyle('A5:A500')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_LEFT);
        $spreadsheet->getActiveSheet()->getStyle('F5:F500')->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);


        // Styling Cells
        $tableHead = [
            "font" => [
                "color" => [
                    "rgb" => "000000"
                ],
                "bold" => true,
                "size" => "10"
            ],
            "fill" => [
                "fillType" => Fill::FILL_SOLID,
                "startColor" => [
                    "rgb" => "818181"
                ]
            ]
        ];

        // Apply styles
        $spreadsheet
            ->getActiveSheet()
            ->getStyle("A4:F4")
            ->applyFromArray($tableHead)
            ->getAlignment()
            ->setHorizontal(Alignment::HORIZONTAL_CENTER);


        // Header text
        $spreadsheet->getActiveSheet()
            ->setCellValue("A4", "ID")
            ->setCellValue("B4", "Device Group")
            ->setCellValue("C4", "Device")
            ->setCellValue("D4", "Description")
            ->setCellValue("E4", "Reported By")
            ->setCellValue("F4", "Reported At");

        return $spreadsheet;
    }

}
