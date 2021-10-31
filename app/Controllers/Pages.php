<?php

namespace App\Controllers;

class Pages extends BaseController
{
    public function home()
    {
        $data = [
            'title' => 'Aplikasi Sentra HKI TA Danis H1A017012',
        ];
        echo view('pages/home', $data);
    }
}
