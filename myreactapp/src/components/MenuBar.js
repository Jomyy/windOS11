import React from "react"
import DropDownMenuBar from "./DropDownMenuBar"
import DateClock from "./DateClock"
export default function MenuBar() {
    return (
        <div className="menuBar acrylic">
            <img width="19" alt="Apple logo white" className="appleLogoMenuBar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Windows_logo_-_1985-1989.svg/1200px-Windows_logo_-_1985-1989.svg.png"></img>
            <DropDownMenuBar items={["hallo", "deineMom"]} title={"Finder"}></DropDownMenuBar>

            <DropDownMenuBar items={["hallo", "deineMom"]} title={"File"}></DropDownMenuBar>
            <DropDownMenuBar items={["hallo", "deineMom"]} title={"Edit"}></DropDownMenuBar>
            <DropDownMenuBar items={["hallo", "deineMom"]} title={"View"}></DropDownMenuBar>
            <DropDownMenuBar items={["hallo", "deineMom"]} title={"Go"}></DropDownMenuBar>
            <DropDownMenuBar items={["hallo", "deineMom"]} title={"Window"}></DropDownMenuBar>
            <DropDownMenuBar items={["hallo", "deineMom"]} title={"Help"}></DropDownMenuBar>
            <div className="weather">
                <p>69F° Partly Cloudy</p>
            </div>
            <DateClock />
        </div>
    )
}