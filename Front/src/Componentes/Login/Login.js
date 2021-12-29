import Form from "./Form";

const Login = () => {
  return (
    <>
      <div className="container w-full ">
        <div className="grid  grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-1">
            <Form />
          </div>
          <div className="hidden md:block md:col-start-2 md:col-end-3">
            <div
              className="absolute z-0 top-0 w-2/3  h-screen
  bg-cover bg-bottom "
              style={{
                backgroundImage: `url("https://cdn.pixabay.com/photo/2020/10/01/17/11/store-5619201_960_720.jpg")`
              }}
              id="bg image"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
