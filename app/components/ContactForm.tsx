"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  carModel: z.string().min(1, "Car model is required"),
  service: z.string().min(1, "Service is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\d+$/, "Invalid phone number")
    .min(1, "Phone number is required"),
});

type FormData = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setLoading(true);
    const templateParams = {
      name: data.name,
      carModel: data.carModel,
      service: data.service,
      email: data.email,
      phone: data.phone,
    };

    emailjs
      .send(
        "service_11ntbxf",
        "template_4kl9k1i",
        templateParams,
        "EsF3RFgIXAYlWt30r"
      )
      .then(
        (response) => {
          setLoading(false);
          toast.success(
            "Email sent successfully! We will contact you as soon as possible!"
          );
        },
        (err) => {
          setLoading(false);
          toast.error("Failed to send email. Please try again later!");
          console.log("FAILED TO SEND EMAIL...", err);
        }
      );
  };

  return (
    <div className="w-full bg-[#0a0a0a]">
      <div className="container mx-auto px-4 pt-[65px] lg:pb-[223px] pb-[100px]">
        <div className="flex flex-col lg:gap-[120px] gap-[80px]">
          <h2 className="text-secondary lg:text-[30px] text-[23px] uppercase text-center">
            Contact
          </h2>
          <div className="flex flex-wrap lg:flex-row flex-col gap-x-[20px] gap-y-[60px] justify-between w-full">
            <div className="flex flex-col gap-[60px] max-w-[800px]">
              <div>
                <p className="uppercase text-secondary font-bold text-[24px]">
                  Book here
                </p>
                <span className="uppercase text-secondary text-[20px]">
                  Fill this form for reservation
                </span>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-8 w-full"
              >
                <div>
                  <input
                    type="text"
                    placeholder="name"
                    {...register("name")}
                    className={`input ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm pl-5 pt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="car model"
                    {...register("carModel")}
                    className={`input ${
                      errors.carModel ? "border-red-500" : ""
                    }`}
                  />
                  {errors.carModel && (
                    <p className="text-red-500 text-sm pl-5 pt-1">
                      {errors.carModel?.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="service"
                    {...register("service")}
                    className={`input ${
                      errors.service ? "border-red-500" : ""
                    }`}
                  />
                  {errors.service && (
                    <p className="text-red-500 text-sm pl-5 pt-1">
                      {errors.service?.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="email"
                    {...register("email")}
                    className={`input ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm pl-5 pt-1">
                      {errors.email?.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="phone"
                    {...register("phone")}
                    className={`input ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm pl-5 pt-1">
                      {errors.phone?.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn mt-2 max-w-[200px] !px-5 !py-1.5 disabled:bg-gray-500"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Confirm"}
                </button>
              </form>
            </div>
            <div className="flex flex-col lg:gap-[80px] gap-[60px]">
              <div className="flex flex-col gap-[40px]">
                <p className="uppercase text-secondary font-bold text-[22px] lg:text-[24px]">
                  Contact us
                </p>
                <div className="flex flex-col gap-[40px]">
                  <div className="flex gap-2">
                    <Image
                      src="/icons/location.png"
                      width={18}
                      height={23}
                      className="w-[18px] h-[23px]"
                      alt="location"
                    />
                    <p className="text-secondary text-[20px]">
                      address:{" "}
                      <span className="text-accent">
                        Yyshjy street 81A, <br />
                        Chicago Illanois
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Image
                      src="/icons/location.png"
                      width={18}
                      height={23}
                      className="w-[18px] h-[23px]"
                      alt="location"
                    />
                    <p className="text-secondary text-[20px]">
                      phone: <span className="text-accent">(773) 209 3754</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Image
                      src="/icons/location.png"
                      width={18}
                      height={23}
                      className="w-[18px] h-[23px]"
                      alt="location"
                    />
                    <p className="text-secondary text-[20px]">
                      e-mail:{" "}
                      <span className="text-accent">
                        markodumnic8@gmail.com
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[30px]">
                <p className="uppercase text-secondary font-bold text-[22px] lg:text-[24px]">
                  Open hours
                </p>
                <div className="flex flex-col gap-[30px]">
                  <div className="">
                    <p className="text-secondary uppercase text-[22px] lg:text-[24px]">
                      Monday - Friday:
                    </p>
                    <span className="text-accent uppercase text-[22px] lg:text-[24px]">
                      8am - 5pm
                    </span>
                  </div>
                  <div className="">
                    <p className="text-secondary uppercase text-[22px] lg:text-[24px]">
                      Saturday:
                    </p>
                    <span className="text-accent uppercase text-[22px] lg:text-[24px]">
                      8am - 2pm
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ContactForm;
