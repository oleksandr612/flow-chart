export default function Home(props) {
    const {
        veryLow = 2,
        low = 2,
        target = 86,
        high = 5,
        veryHigh = 5,
    } = props;
    return (
        <div className="container mx-auto p-4">
            <div
                style={{ width: "500px", height: "500px" }}
                className="relative"
            >
                {/* frist box */}
                <div
                    className="w-96 bg-transparent absolute rounded-2xl border-2 border-black"
                    style={{
                        left: "30px",
                        height:
                            40 + (400 * (veryHigh + high / 2.0)) / 100 + "px",
                    }}
                >
                    <div className="w-full h-full relative">
                        <div
                            className="absolute rounded-lg"
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 150,
                                top: "-15px",
                                color: "white",
                                textAlign: "center",
                                fontSize: "18px",
                                backgroundColor: "rgb(220 117 28)",
                            }}
                        >
                            Very High
                        </div>
                        <div
                            className="absolute"
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 150,
                                top: "15px",
                                color: "black",
                                textAlign: "center",
                                fontSize: "14px",
                            }}
                        >
                            &gt;250 mg/dL
                        </div>
                        <div
                            className="absolute rounded-lg"
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 150,
                                bottom: "-15px",
                                color: "white",
                                textAlign: "center",
                                fontSize: "18px",
                                backgroundColor: "rgb(231 164 11)",
                            }}
                        >
                            High
                        </div>
                        <div
                            className="absolute"
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 150,
                                bottom: "-45px",
                                color: "black",
                                textAlign: "center",
                                fontSize: "14px",
                            }}
                        >
                            &gt;181~250 mg/dL
                        </div>
                        <div
                            className="absolute rounded-lg bg-white"
                            style={{
                                width: "40px",
                                height: "26px",
                                zIndex: 10,
                                left: 290,
                                fontSize: "18px",
                                fontWeight: "bold",
                                bottom: "-15px",
                                color: "black",
                                textAlign: "center",
                            }}
                        >
                            {high}%
                        </div>
                        <div
                            className="absolute rounded-lg bg-white"
                            style={{
                                width: "40px",
                                height: "26px",
                                zIndex: 10,
                                left: 290,
                                fontSize: "18px",
                                fontWeight: "bold",
                                top: "-15px",
                                color: "black",
                                textAlign: "center",
                            }}
                        >
                            {veryHigh}%
                        </div>
                    </div>
                </div>
                <div
                    className="w-96 bg-transparent absolute "
                    style={{
                        left: "413px",
                        height:
                            40 + (400 * (veryHigh + high / 2.0)) / 100 + "px",
                    }}
                >
                    <div className="w-full h-full relative">
                        <div
                            style={{
                                width: 50,
                                height: 2,
                                top:
                                    (40 +
                                        (400 * (veryHigh + high / 2.0)) / 100) /
                                        2.0 +
                                    "px",
                            }}
                            className="absolute bg-black"
                        ></div>
                        <div
                            className="absolute"
                            style={{
                                width: "40px",
                                height: "26px",
                                zIndex: 10,
                                left: 60,
                                top:
                                    (40 +
                                        (400 * (veryHigh + high / 2.0)) / 100) /
                                        2.0 -
                                    17 +
                                    "px",
                                color: "black",
                                fontSize: "22px",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            {veryHigh + high}%
                        </div>
                        <div
                            className="absolute"
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 25,
                                top:
                                    (40 +
                                        (400 * (veryHigh + high / 2.0)) / 100) /
                                        2.0 +
                                    15 +
                                    "px",
                                color: "black",
                                textAlign: "center",
                            }}
                        >
                            Goal &lt; 25%
                        </div>
                    </div>
                </div>
                {/* first box end */}

                {/* chart part */}
                <div
                    className="absolute h-96 w-16 bg-gray-200 flex flex-col justify-end rounded-3xl"
                    style={{ height: "400px", top: "40px", zIndex: 100 }}
                >
                    <div
                        className="h-12 rounded-t-2xl"
                        style={{
                            height: veryHigh + "%",
                            backgroundColor: "rgb(220 117 28)",
                        }}
                    ></div>
                    <div
                        className="h-4 bg-orange-500"
                        style={{
                            height: high + "%",
                            backgroundColor: "rgb(231 164 11)",
                        }}
                    ></div>
                    <div
                        className="h-74 bg-green-500"
                        style={{
                            height: target + "%",
                            backgroundColor: "rgb(41 157 143)",
                        }}
                    ></div>
                    <div
                        className="h-8 bg-pink-500"
                        style={{
                            height: low + "%",
                            backgroundColor: "rgb(203 5 37)",
                        }}
                    ></div>
                    <div
                        className="h-2 bg-red-800 rounded-b-2xl"
                        style={{
                            height: veryLow + "%",
                            backgroundColor: "rgb(142 40 47)",
                        }}
                    ></div>
                </div>
                {/* end of chart part */}

                {/* middle part */}
                <div
                    className="w-96 bg-transparent absolute"
                    style={{
                        left: "64px",
                        top: 15 + 4 * (veryHigh + high + target / 2.0),
                        height: 50,
                    }}
                >
                    <div className="w-full h-full relative">
                        <div
                            style={{ width: 400, height: 2, top: 24 }}
                            className="absolute bg-black"
                        ></div>
                        <div
                            className="absolute rounded-lg "
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 120,
                                top: 11,
                                color: "white",
                                textAlign: "center",
                                fontSize: "18px",
                                backgroundColor: "rgb(41 157 143)",
                            }}
                        >
                            In Range
                        </div>
                        <div
                            className="absolute"
                            style={{
                                width: "40px",
                                height: "26px",
                                zIndex: 10,
                                left: 410,
                                top: 7,
                                color: "black",
                                fontSize: "22px",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            {target}%
                        </div>

                        <div
                            className="absolute"
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 375,
                                top: 40,
                                color: "black",
                                textAlign: "center",
                            }}
                        >
                            Goal &gt; 70%
                        </div>

                        <div
                            className="absolute"
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 120,
                                top: 40,
                                color: "black",
                                textAlign: "center",
                                fontSize: "14px",
                            }}
                        >
                            70~180 mg/dL
                        </div>
                    </div>
                </div>
                {/* end middle part */}

                {/* bottom part */}
                <div
                    className="w-96 bg-transparent absolute rounded-2xl border-2 border-black"
                    style={{
                        left: "30px",
                        bottom: 22,
                        height: 38 + 4 * (veryLow + low / 2.0) + "px",
                    }}
                >
                    <div className="w-full h-full relative">
                        <div
                            className="absolute rounded-lg"
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 150,
                                top: "-15px",
                                color: "white",
                                textAlign: "center",
                                fontSize: "18px",
                                backgroundColor: "rgb(203 5 37)",
                            }}
                        >
                            Low
                        </div>
                        <div
                            className="absolute"
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 150,
                                top: "15px",
                                color: "black",
                                textAlign: "center",
                                fontSize: "14px",
                            }}
                        >
                            54~69 mg/dL
                        </div>
                        <div
                            className="absolute rounded-lg "
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 150,
                                bottom: "-15px",
                                color: "white",
                                textAlign: "center",
                                fontSize: "18px",
                                backgroundColor: "rgb(142 40 47)",
                            }}
                        >
                            Very Low
                        </div>
                        <div
                            className="absolute"
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 150,
                                bottom: "-45px",
                                color: "black",
                                textAlign: "center",
                                fontSize: "14px",
                            }}
                        >
                            &lt;54 mg/dL
                        </div>
                        <div
                            className="absolute rounded-lg bg-white"
                            style={{
                                width: "40px",
                                height: "26px",
                                zIndex: 10,
                                left: 290,
                                fontSize: "18px",
                                fontWeight: "bold",
                                bottom: "-15px",
                                color: "black",
                                textAlign: "center",
                            }}
                        >
                            {veryLow}%
                        </div>
                        <div
                            className="absolute rounded-lg bg-white"
                            style={{
                                width: "40px",
                                height: "26px",
                                zIndex: 10,
                                left: 290,
                                fontSize: "18px",
                                fontWeight: "bold",
                                top: "-15px",
                                color: "black",
                                textAlign: "center",
                            }}
                        >
                            {low}%
                        </div>
                    </div>
                </div>
                <div
                    className="w-96 bg-transparent absolute "
                    style={{
                        left: "413px",
                        bottom: 22,
                        height: 38 + 4 * (veryLow + low / 2.0) + "px",
                    }}
                >
                    <div className="w-full h-full relative">
                        <div
                            style={{
                                width: 50,
                                height: 2,
                                top:
                                    (38 + 4 * (veryLow + low / 2.0)) / 2.0 +
                                    "px",
                            }}
                            className="absolute bg-black"
                        ></div>
                        <div
                            className="absolute"
                            style={{
                                width: "40px",
                                height: "26px",
                                zIndex: 10,
                                left: 60,
                                top:
                                    (38 + 4 * (veryLow + low / 2.0)) / 2.0 -
                                    17 +
                                    "px",
                                color: "black",
                                fontSize: "22px",
                                fontWeight: "bold",
                                textAlign: "center",
                            }}
                        >
                            {low + veryLow}%
                        </div>
                        <div
                            className="absolute"
                            style={{
                                width: "110px",
                                height: "30px",
                                zIndex: 10,
                                left: 25,
                                top:
                                    (38 + 4 * (veryLow + low / 2.0)) / 2.0 +
                                    15 +
                                    "px",
                                color: "black",
                                textAlign: "center",
                            }}
                        >
                            Goal &lt; 4%
                        </div>
                    </div>
                </div>
                {/* end bottom part */}
            </div>
        </div>
    );
}
