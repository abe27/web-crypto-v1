<?php

namespace App\Http\Controllers;

use App\Helpers\LogActivity;
use App\Models\PeriodHour;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PeriodHourController extends Controller
{
    private $breadcrumbs = [
        [
            "id" => 1,
            "name" => "หน้าแรก",
            "icon" => false,
            "current" => false,
            "href" => "dashboard.index",
        ],
        [
            "id" => 2,
            "name" => "กำหนดช่วงเวลา",
            "icon" => true,
            "current" => true,
            "href" => "administrator.period.hour.index",
        ],
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $periodHour = PeriodHour::where('is_active', true)->get();
        $data = [
            "title" => "จัดการข้อมูลกำหนดช่วงเวลาแบบรายชั่วโมง",
            "description" => "จัดการข้อมูลกำหนดช่วงเวลาแบบรายชั่วโมง",
            "breadcrumbs" => $this->breadcrumbs,
            'data' => $periodHour
        ];
        return Inertia::render('PeriodHour/PeriodHour', $data);
    }

    public function get()
    {
        $periodHour = PeriodHour::get();
        return response()->json($periodHour);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $breadcrumbs = [
            "id" => 3,
            "name" => "สร้างเอกสารใหม่",
            "icon" => true,
            "current" => true,
            "href" => "welcome",
        ];
        $this->breadcrumbs[1]["current"] = false;

        array_push($this->breadcrumbs, $breadcrumbs);


        $data = [
            "title" => "เพิ่มข้อมูลกำหนดช่วงเวลาแบบรายชั่วโมง",
            "description" => "ทำการเพิ่มข้อมูลกำหนดช่วงเวลาแบบรายชั่วโมง",
            "breadcrumbs" => $this->breadcrumbs,
            "href" => "administrator.period.hour.store",
            'data' => null
        ];
        return Inertia::render('PeriodHour/AddPeriodHour', $data);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'string|required|unique:period_hours|max:255',
        ]);

        $periodHour = new PeriodHour();
        $periodHour->name = $request->name;
        $periodHour->description = $request->description;
        $periodHour->is_active = $request->is_active;
        $periodHour->save();

        LogActivity::addToLog('เพิ่มข้อมูล period hour ' . $periodHour->id);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PeriodHour  $periodHour
     * @return \Illuminate\Http\Response
     */
    public function show(PeriodHour $periodHour)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\PeriodHour  $periodHour
     * @return \Illuminate\Http\Response
     */
    public function edit(PeriodHour $periodHour)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PeriodHour  $periodHour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PeriodHour $periodHour)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PeriodHour  $periodHour
     * @return \Illuminate\Http\Response
     */
    public function destroy(PeriodHour $periodHour)
    {
        //
    }
}
