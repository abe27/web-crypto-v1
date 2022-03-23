<?php

namespace App\Http\Controllers;

use App\Helpers\LogActivity;
use App\Models\TimeFrame;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class TimeFrameController extends Controller
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
            "name" => "ข้อมูลช่วงเวลา",
            "icon" => true,
            "current" => true,
            "href" => "administrator.time_frame.index",
        ],
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $timeFrame = TimeFrame::where('is_active', true)->get();

        $data = [
            "title" => "จัดการช่วงเวลาในการดึงข้อมูล",
            "description" => "จัดการช่วงเวลาในการดึงข้อมูล",
            "breadcrumbs" => $this->breadcrumbs,
            'data' => $timeFrame
        ];
        return Inertia::render('TimeFrame/TimeFrame', $data);
    }

    public function get()
    {
        $timeFrame = TimeFrame::orderBy('created_at')->get();
        return response()->json($timeFrame);
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
            "title" => "เพิ่มข้อมูลช่วงเวลาในการดึงข้อมูล",
            "description" => "ทำการเพิ่มข้อมูลช่วงเวลาในการดึงข้อมูล",
            "breadcrumbs" => $this->breadcrumbs,
            "href" => "administrator.time_frame.store",
            'data' => null
        ];
        return Inertia::render('TimeFrame/AddTimeFrame', $data);
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
            'name' => 'string|required|unique:time_frames|max:255',
        ]);

        $timeFrame = new TimeFrame();
        $timeFrame->name = $request->name;
        $timeFrame->description = $request->description;
        $timeFrame->is_active = $request->is_active;
        $timeFrame->save();

        LogActivity::addToLog('เพิ่มข้อมูล time frame ' . $timeFrame->id);

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TimeFrame  $timeFrame
     * @return \Illuminate\Http\Response
     */
    public function show(TimeFrame $timeFrame)
    {
        $breadcrumbs = [
            "id" => 3,
            "name" => "แก้ไขข้อมูล",
            "icon" => true,
            "current" => true,
            "href" => "welcome",
        ];
        $this->breadcrumbs[1]["current"] = false;

        array_push($this->breadcrumbs, $breadcrumbs);


        $data = [
            "title" => "แก้ไขข้อมูลช่วงเวลาในการดึงข้อมูล",
            "description" => "ทำการแก้ไขข้อมูลช่วงเวลาในการดึงข้อมูล",
            "breadcrumbs" => $this->breadcrumbs,
            "href" => "administrator.time_frame.put",
            'data' => $timeFrame
        ];
        return Inertia::render('TimeFrame/UpdateTimeFrame', $data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TimeFrame  $timeFrame
     * @return \Illuminate\Http\Response
     */
    public function edit(TimeFrame $timeFrame)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\TimeFrame  $timeFrame
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TimeFrame $timeFrame)
    {
        $timeFrame->name = $request->name;
        $timeFrame->description = $request->description;
        $timeFrame->is_active = $request->is_active;
        $timeFrame->save();
        return redirect()->back()->with('data', $timeFrame);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TimeFrame  $timeFrame
     * @return \Illuminate\Http\Response
     */
    public function destroy(TimeFrame $timeFrame)
    {
        //
    }
}
