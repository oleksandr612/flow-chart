export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div style={{ width: "500px", height: "500px" }} className="relative">
        {/* frist box */}
        <div
          className="h-24 w-96 bg-transparent absolute rounded-3xl border-2 border-black"
          style={{ left: "30px" }}
        >
          <div className="w-full h-full relative">
            <div
              className="absolute rounded-lg"
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 150,
                top: "-13px",
                color: "white",
                textAlign: "center",
                backgroundColor: "rgb(220 117 28)",
              }}
            >
              Very High
            </div>
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 150,
                top: "15px",
                color: "black",
                textAlign: "center",
              }}
            >
              250 mg/dL
            </div>
            <div
              className="absolute rounded-lg"
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 150,
                bottom: "-13px",
                color: "white",
                textAlign: "center",
                backgroundColor: "rgb(231 164 11)",
              }}
            >
              High
            </div>
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 150,
                bottom: "-41px",
                color: "black",
                textAlign: "center",
              }}
            >
              250 mg/dL
            </div>
            <div
              className="absolute rounded-lg bg-white"
              style={{
                width: "50px",
                height: "26px",
                zIndex: 10,
                left: 280,
                bottom: "-13px",
                color: "black",
                textAlign: "center",
              }}
            >
              4%
            </div>
            <div
              className="absolute rounded-lg bg-white"
              style={{
                width: "50px",
                height: "26px",
                zIndex: 10,
                left: 280,
                top: "-13px",
                color: "black",
                textAlign: "center",
              }}
            >
              4%
            </div>
          </div>
        </div>
        <div
          className="h-24 w-96 bg-transparent absolute "
          style={{ left: "413px" }}
        >
          <div className="w-full h-full relative">
            <div
              style={{ width: 50, height: 2, top: 44 }}
              className="absolute bg-black"
            ></div>
            <div
              className="absolute"
              style={{
                width: "40px",
                height: "26px",
                zIndex: 10,
                left: 50,
                top: 32,
                color: "black",
                textAlign: "center",
              }}
            >
              16%
            </div>
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 20,
                bottom: 15,
                color: "black",
                textAlign: "center",
              }}
            >
              Goal 25%
            </div>
          </div>
        </div>
        {/* first box end */}
        <div
          className="absolute h-96 w-16 bg-gray-200 flex flex-col justify-end rounded-3xl"
          style={{ height: "400px", top: "40px", zIndex: 100 }}
        >
          <div
            className="h-12 rounded-t-2xl"
            style={{ height: "12%", backgroundColor: "rgb(220 117 28)" }}
          ></div>
          <div
            className="h-4 bg-orange-500"
            style={{ height: "4%", backgroundColor: "rgb(231 164 11)" }}
          ></div>
          <div
            className="h-74 bg-green-500"
            style={{ height: "66%", backgroundColor: "rgb(41 157 143)" }}
          ></div>
          <div
            className="h-8 bg-pink-500"
            style={{ height: "12%", backgroundColor: "rgb(203 5 37)" }}
          ></div>
          <div
            className="h-2 bg-red-800 rounded-b-2xl"
            style={{ height: "6%", backgroundColor: "rgb(142 40 47)" }}
          ></div>
        </div>

        {/* middle part */}
        <div
          className="h-24 w-96 bg-transparent absolute"
          style={{ left: "64px", top: 200 }}
        >
          <div className="w-full h-full relative">
            <div
              style={{ width: 390, height: 2, top: 44 }}
              className="absolute bg-black"
            ></div>
            <div
              className="absolute rounded-lg "
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 120,
                top: "33px",
                color: "white",
                textAlign: "center",
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
                left: 390,
                top: 32,
                color: "black",
                textAlign: "center",
              }}
            >
              74%
            </div>
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 360,
                bottom: 15,
                color: "black",
                textAlign: "center",
              }}
            >
              Goal 70%
            </div>
          </div>
        </div>
        {/* end middle part */}

        <div
          className="h-24 w-96 bg-transparent absolute rounded-3xl border-2 border-black"
          style={{ left: "30px", bottom: 22 }}
        >
          <div className="w-full h-full relative">
            <div
              className="absolute rounded-lg"
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 150,
                top: "-13px",
                color: "white",
                textAlign: "center",
                backgroundColor: "rgb(203 5 37)",
              }}
            >
              Low
            </div>
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 150,
                top: "15px",
                color: "black",
                textAlign: "center",
              }}
            >
              250 mg/dL
            </div>
            <div
              className="absolute rounded-lg "
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 150,
                bottom: "-13px",
                color: "white",
                textAlign: "center",
                backgroundColor: "rgb(142 40 47)",
              }}
            >
              Very Low
            </div>
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 150,
                bottom: "-41px",
                color: "black",
                textAlign: "center",
              }}
            >
              250 mg/dL
            </div>
            <div
              className="absolute rounded-lg bg-white"
              style={{
                width: "50px",
                height: "26px",
                zIndex: 10,
                left: 280,
                bottom: "-13px",
                color: "black",
                textAlign: "center",
              }}
            >
              4%
            </div>
            <div
              className="absolute rounded-lg bg-white"
              style={{
                width: "50px",
                height: "26px",
                zIndex: 10,
                left: 280,
                top: "-13px",
                color: "black",
                textAlign: "center",
              }}
            >
              4%
            </div>
          </div>
        </div>
        <div
          className="h-24 w-96 bg-transparent absolute "
          style={{ left: "413px", bottom: 22 }}
        >
          <div className="w-full h-full relative">
            <div
              style={{ width: 50, height: 2, top: 44 }}
              className="absolute bg-black"
            ></div>
            <div
              className="absolute"
              style={{
                width: "40px",
                height: "26px",
                zIndex: 10,
                left: 50,
                top: 32,
                color: "black",
                textAlign: "center",
              }}
            >
              16%
            </div>
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "26px",
                zIndex: 10,
                left: 20,
                bottom: 15,
                color: "black",
                textAlign: "center",
              }}
            >
              Goal 25%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
