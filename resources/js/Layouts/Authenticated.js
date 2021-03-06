import React, { useState, useEffect } from "react";
import Dropdown from "@/Components/Dropdown";

const loopChild = (i) => {
  if (i.menu_group == "User") {
    if (i.is_dash)
      return <hr key={i.id} className="border-t mx-2 border-gray-400" />;

    return (
      <Dropdown.Link
        key={i.id}
        href={route(i.route)}
        method={i.method}
        as="button"
      >
        <i className={`${i.icon} fa-fw mr-2`}></i>
        {i.name}
      </Dropdown.Link>
    );
  }
};

const DropdownList = (i) => {
  if (i.is_dash)
    return <hr key={i.name} className="border-t mx-2 border-gray-400" />;

  return (
    <Dropdown.Link
      key={i.name}
      href={route(i.route)}
      method={i.method}
      as="button"
    >
      <i className={`${i.icon} fa-fw mr-2`}></i>
      {i.name}
    </Dropdown.Link>
  );
};

const mainMenu = (i) => {
  if (i.menu_group == "Main") {
    let txt_border = "";
    let txt_color = i.text_color;
    let name = route().current().substring(0, 3);
    let mname = i.route.substring(0, 3);
    if (name == mname) {
      txt_color = "text-green-600";
      txt_border = "border-green-600";
    }

    if (i.children) {
      return (
        <li key={i.id} className="mr-6 my-2 md:my-0">
          <Dropdown>
            <Dropdown.Trigger>
              <span className="inline-flex rounded-md">
                <a
                  type="button"
                  className={`block py-1 md:py-3 pl-1 align-middle ${txt_color} no-underline hover:text-gray-900 border-b-2 ${txt_border} hover:${i.over_hover}`}
                >
                  <i className={`${i.icon} fa-fw mr-3 ${txt_color}`}></i>
                  <span className="pb-1 md:pb-0 text-sm mr-3">{i.name}</span>
                  <i
                    className={`fa-solid fa-chevron-down fa-fw ${txt_color}`}
                  ></i>
                </a>
              </span>
            </Dropdown.Trigger>

            <Dropdown.Content>
              {i.children && i.children.map((x) => DropdownList(x))}
            </Dropdown.Content>
          </Dropdown>
        </li>
      );
    }

    return (
      <li key={i.id} className="mr-6 my-2 md:my-0">
        <a
          href={route(i.route)}
          className={`block py-1 md:py-3 pl-1 align-middle ${txt_color} no-underline hover:text-gray-900 border-b-2 ${txt_border} hover:${i.over_hover}`}
        >
          <i className={`${i.icon} fa-fw mr-3 ${txt_color}`}></i>
          <span className="pb-1 md:pb-0 text-sm">{i.name}</span>
        </a>
      </li>
    );
  }
};

const Authenticated = ({ auth, header, children }) => {
  const [menuItem, setMenuItem] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const getMenu = async () => {
    // const get = await axios.get(route('menu.get'))
    // const data = await get.data
    const data = [
      {
        id: "H9a2HNEkEyBfd7ih99Wa5",
        is_dash: 0,
        seq: 0,
        menu_group: "Main",
        name: "?????????????????????",
        icon: "fas fa-home",
        method: "get",
        route: "dashboard.index",
        text_color: "text-gray-500",
        over_hover: "border-orange-600",
        description: "Dashboard",
      },
      {
        id: "5UweOf2kr2jG7CuxSTAqp",
        is_dash: 0,
        seq: 1,
        menu_group: "Main",
        name: "???????????????????????????????????????",
        icon: "fas fa-chart-line",
        method: "get",
        route: "trend.index",
        text_color: "text-gray-500",
        over_hover: "border-green-600",
        description: "Over Time",
      },
      {
        id: "YO7mcamOR6HlZaxEfbcHO",
        is_dash: 0,
        seq: 2,
        menu_group: "Main",
        name: "??????????????????????????????????????????",
        icon: "fa-solid fa-sack-dollar",
        method: "get",
        route: "investment.index",
        text_color: "text-gray-500",
        over_hover: "border-orange-600",
        description: "Leave",
      },
      {
        id: "DkTSP87vrzTgLfYWACDxW",
        is_dash: 0,
        seq: 3,
        menu_group: "Main",
        name: "???????????????????????????????????? Api",
        icon: "fa-solid fa-plug-circle-bolt",
        method: "get",
        route: "api-data.index",
        text_color: "text-gray-500",
        over_hover: "border-blue-500",
        description: "Analytics",
      },
      {
        id: "Cb9JLUdkk3kyRv0Dyu1K0",
        is_dash: 0,
        seq: 4,
        menu_group: "Main",
        name: "?????????????????????????????????????????????????????????",
        icon: "fa-solid fa-rss",
        method: "get",
        route: "blog.index",
        text_color: "text-gray-500",
        over_hover: "border-pink-500",
        description: "Report",
      },
      {
        id: "Cb9JLUdkk3kyRv0Dyu1Kg",
        is_dash: 0,
        seq: 4,
        menu_group: "Main",
        name: "?????????????????????????????????",
        icon: "fa-solid fa-screwdriver-wrench",
        method: "get",
        route: "administrator.index",
        text_color: "text-gray-500",
        over_hover: "border-pink-500",
        description: "Report",
        children: [
          {
            name: "??????????????????????????????????????????(Time Frame)",
            description: "",
            icon: "fa-solid fa-angle-right",
            route: "administrator.time_frame.index",
            method: "get",
          },
          {
            name: "??????????????????????????????????????????(Hour)",
            description: "",
            icon: "fa-solid fa-angle-right",
            route: "administrator.period.hour.index",
            method: "get",
          },
          {
            name: "??????????????????????????????????????????(Minute)",
            description: "",
            icon: "fa-solid fa-angle-right",
            route: "administrator.index",
            method: "get",
          },
          {
            is_dash: 1,
            name: "dash_1",
          },
          {
            name: "???????????????????????????????????????????????????????????????????????????",
            description: "",
            icon: "fa-solid fa-angle-right",
            route: "administrator.index",
            method: "get",
          },
          {
            name: "????????????????????????????????????????????????????????????",
            description: "",
            icon: "fa-solid fa-angle-right",
            route: "administrator.index",
            method: "get",
          },
          {
            is_dash: 1,
            name: "dash_2",
          },
          {
            name: "??????????????????????????????????????????",
            description: "",
            icon: "fa-solid fa-angle-right",
            route: "administrator.index",
            method: "get",
          },
          {
            name: "??????????????????????????????????????????????????????????????????????????????",
            description: "",
            icon: "fa-solid fa-angle-right",
            route: "administrator.index",
            method: "get",
          },
          {
            name: "???????????????????????????????????????????????????????????????",
            description: "",
            icon: "fa-solid fa-angle-right",
            route: "administrator.index",
            method: "get",
          },
          {
            is_dash: 1,
            name: "dash_3",
          },
          {
            name: "???????????????????????????????????? Momemtum",
            description: "",
            icon: "fa-solid fa-angle-right",
            route: "administrator.index",
            method: "get",
          },
          {
            name: "?????????????????????????????????????????????????????????",
            description: "",
            icon: "fa-solid fa-angle-right",
            route: "administrator.index",
            method: "get",
          },
        ],
      },
      {
        id: "DAdypJsP5LsaTf5kMzWHu",
        is_dash: 0,
        seq: 7,
        menu_group: "User",
        name: "???????????????????????????????????????",
        icon: "fa-solid fa-user",
        method: "get",
        route: "dashboard.index",
        text_color: "text-gray-500",
        over_hover: "border-green-500",
        description: "My Profile",
      },
      {
        id: "mlUI4rDeKpCFh39wHvnEL",
        is_dash: 0,
        seq: 8,
        menu_group: "User",
        name: "????????????????????????????????????",
        icon: "fa-solid fa-bell",
        method: "get",
        route: "dashboard.index",
        text_color: "text-gray-500",
        over_hover: "green-500",
        description: "Notifications",
      },
      {
        id: "CK4lYxWZUsiKV5xvGD6YP",
        is_dash: 1,
        seq: 9,
        menu_group: "User",
        name: "dash",
        icon: "fa-solid fa-user",
        method: "get",
        route: "dashboard.index",
        text_color: "text-gray-500",
        over_hover: "green-500",
        description: "dash",
      },
      {
        id: "JELTlVtn70A7vK195tDeD",
        is_dash: 0,
        seq: 10,
        menu_group: "User",
        name: "??????????????????????????????",
        icon: "fa-solid fa-right-from-bracket",
        method: "post",
        route: "logout",
        text_color: "text-gray-500",
        over_hover: "green-500",
        description: "Log Out",
      },
    ];
    setMenuItem(data);
  };

  const getProfile = async () => {
    // const get = await axios.get(route('profile.get'))
    // const data = await get.data
    // console.dir(data)
    // setProfileData(data)
  };

  useEffect(() => {
    getMenu(), getProfile();
  }, []);

  return (
    <div className="min-h-screen font-sans leading-normal tracking-normal">
      <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">
        <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">
          <div className="w-1/2 pl-2 md:pl-0">
            <a
              className="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-bold"
              href={route("dashboard.index")}
            >
              <i className="fa-solid fa-chart-simple text-green-600 pr-3"></i>
              iRab(System For Analysis)
            </a>
          </div>
          <div className="w-1/2 pr-0">
            <div className="flex relative inline-block float-right">
              <div className="relative text-sm">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                      >
                        <img
                          className="w-8 h-8 rounded-full mr-4"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                          alt=""
                        />{" "}
                        <span className="hidden md:inline-block">
                          Hi, {auth.user.name}
                        </span>
                        <svg
                          className="ml-2 -mr-0.5 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content width="w-48">
                    {menuItem && menuItem.map((i) => loopChild(i))}
                  </Dropdown.Content>
                </Dropdown>
              </div>

              <div className="block lg:hidden pr-4">
                <button
                  id="nav-toggle"
                  className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none"
                >
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex flex-1 items-center px-4 md:px-0">
              {menuItem && menuItem.map((i) => mainMenu(i))}
            </ul>
            <div className="relative pull-right pl-4 pr-4 md:pr-0">
              <span className="absolute search-icon inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="submit"
                  className="p-4 focus:outline-none focus:shadow-outline"
                >
                  <svg
                    className="fill-current pointer-events-none text-gray-800 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="w-full text-sm text-gray-800 bg-gray-100 focus:outline-none focus:bg-white focus:text-gray-900 rounded py-1 px-2 pl-10 appearance-none leading-normal"
                placeholder="Search..."
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </nav>
      <main className="container w-full mx-auto pt-20">{children}</main>
    </div>
  );
};

export default Authenticated;
