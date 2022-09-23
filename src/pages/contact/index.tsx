import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, ReactIcon, SelectInput } from "../../components";
import whatsappImage from "../../public/whatsapp1.png";

interface FormData {
  firstname: string;
  lastname: string;
  subject: string;
  phone: number;
  message: string;
  email: string;
}

function Index() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  const typeOptions = [
    {
      name: "message",
      value: "trigger",
      icon: "IoIosGitPullRequest",
    },
    { name: "Work together", value: "stage", icon: "FaWaveSquare" },
    { name: "Hire Us", value: "stage", icon: "BsBarChartSteps" },
    { name: "another", value: "stage", icon: "MdErrorOutline" },
  ];

  return (
    <>
      <div className="h-[370px] bg-black flex items-center">
        <div className="md:bg-nature-dark bg-nature-light bg-cover object-cover bg-center h-full w-full object-cover z-10"></div>
        <div className="w-full z-10 h-[370px] bg-[rgba(0,0,0,0.7)] absolute flex items-center">
          <div className="container_main w-full">
            <div className="md:w-1/2">
              <h1 className="font-bold text-4xl text-gray-100 font-['Nosifer']">
                OUR CONTACTS
              </h1>
              <p className="py-2 text-gray-200">
                We’d love to hear from you! Send us a message using the form
                opposite, or email us. We’d love to hear from you! Send us a
                message using the form opposite, or email us.
              </p>
              <hr className="border border-[3px] border-yellow-600 rounded mt-3 w-48" />
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-zinc-800 bg-white py-20">
        <div className="container_main border-l-4 border-yellow-600">
          <div className="">
            <h2 id="contact-heading" className="sr-only">
              Contact us
            </h2>

            <div className="text-black">
              {/* Contact form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 dark:text-white">
                <h1 className="font-[700] text-4xl">Let{"'"}s Talk?</h1>
                <p className="text-md py-2">
                  Let’s make something awesome together!
                </p>
                <form
                  className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8 z-20"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-md font-medium text-warm-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("firstname", {
                          required: true,
                          minLength: 3,
                          maxLength: 30,
                        })}
                        placeholder="Enter Your First Name"
                        className="block w-full dark:bg-zinc-700 bg-gray-100 rounded-sm border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-md font-medium text-warm-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("lastname", {
                          required: true,
                          minLength: 3,
                          maxLength: 30,
                        })}
                        placeholder="Enter Your Last Name"
                        className="block w-full dark:bg-zinc-700 bg-gray-100 rounded-sm border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-md font-medium text-warm-gray-900">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        {...register("email", {
                          required: true,
                          minLength: 3,
                          maxLength: 35,
                          pattern: /@/i,
                        })}
                        placeholder="Enter Your Email"
                        className="block w-full dark:bg-zinc-700 bg-gray-100 rounded-sm border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm"
                      />
                      {/* <div className="block mb-2 text-[14px] text-red-500 pt-1">
                        {errors?.email?.type === "required" && (
                          <div className="flex items-center">
                            <ReactIcon
                              icon="MdErrorOutline"
                              className="w-4 h-4 mr-1"
                            />
                            <p>Email is required</p>
                          </div>
                        )}
                        {errors?.email?.type === "pattern" && (
                          <p>Couldn’t find your Google Account</p>
                        )}
                        {errors?.email?.type === "minLength" && (
                          <p>Email more than 6 characters</p>
                        )}
                        {errors?.email?.type === "maxLength" && (
                          <p>Email less than 15 characters</p>
                        )}
                      </div> */}
                    </div>
                  </div>
                  <div>
                    <div className="">
                      <label
                        htmlFor="phone"
                        className="block text-md font-medium text-warm-gray-900"
                      >
                        Option
                      </label>
                    </div>
                    <div className="mt-1">
                      <SelectInput
                        options={typeOptions}
                        label=""
                        // defaultValue={typeOptions.find(
                        //   (option) => option.value === item.type
                        // )}
                        // onChange={(e) => handleChange(e, item.id, "type")}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-md font-medium text-warm-gray-900"
                    >
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        placeholder="Enter Your Subject Heading"
                        className="block w-full dark:bg-zinc-700 bg-gray-100 rounded-sm border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="">
                      <label
                        htmlFor="message"
                        className="block text-md font-medium text-warm-gray-900"
                      >
                        Message
                      </label>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Enter Your Message..."
                        className="block w-full dark:bg-zinc-700 bg-gray-100 rounded-sm border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end mt-2">
                    <Button full type="submit">
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <div className="dark:text-white container_main border-r-4 border-yellow-600">
            <div className="md:pl-[53px] md:pr-[47px]">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<iframe <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4125.005578209854!2d74.46209741575586!3d35.88191098014813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e635a1fd68ec53%3A0xd585ddae5dda8716!2sSoftware%20Technology%20Park%20Gilgit!5e1!3m2!1sen!2s!4v1663497176599!5m2!1sen!2s" width="100%" height="290" style="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>`,
                }}
              ></div>
              <Button
                full
                className="mt-5"
                onClick={() =>
                  window.open("https://goo.gl/maps/ePjRRnGXWhypLVrb7", "_blank")
                }
              >
                See Location
              </Button>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="absolute right-0 lg:top-[650px] -right-32 top-[390px] -translate-y-1/2 -translate-x-1/3 transform xl:-translate-y-3/4 lg:hidden xl:block"
        width={404}
        height={384}
        fill="none"
        viewBox="0 0 404 384"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x={0}
              y={0}
              width={4}
              height={4}
              className="dark:text-zinc-500 text-gray-400"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          width={404}
          height={384}
          fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
        />
      </svg>
      <div
        title="Contact us on whatsapp"
        className="bottom-5 right-5 w-10 h-10 md:w-14 md:h-14 fixed md:bottom-10 md:left-10 cursor-pointer animate-bounce"
        onClick={() =>
          window.open(
            "https://api.whatsapp.com/send/?phone=923554529168&text&app_absent=0",
            "_blank"
          )
        }
      >
        <Image width={100} height={100} src={whatsappImage} alt={"whatsapp"} />
      </div>
    </>
  );
}

export default Index;
