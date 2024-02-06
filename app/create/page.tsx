"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaImage } from "react-icons/fa6";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  UploadTask,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "@/firebase";
import Link from "next/link";

const page = () => {
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [loading, setLoading] = useState<number>(0);
  const [upload, setUpload] = useState<boolean>(false);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };
  // const handleSubmit = async () => {
  //   const storagRef = ref(storage, description);
  //    setUpload(true)
  //   const uploadTask: UploadTask = uploadBytesResumable(
  //     storagRef,
  //     image as Blob
  //   );

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       setLoading(progress);
  //     },
  //     (error) => {
  //       console.error("Upload error:", error);
  //     },
  //     () => {
  //       // Upload complete, get download URL
  //       getDownloadURL(storagRef)
  //         .then((downloadURL) => {
  //           setImg(downloadURL);
  //         })
  //         .catch((err) => {
  //           console.error("Error getting download URL:", err);
  //         });
  //     }
  //   );
  // };

  return (
    <div>
      <div className=" m-auto bg-slate-700 border-2 flex justify-center  text-center rounded-2xl w-80">
        <form className=" flex flex-col p-4 ">
          <div className="m-2 flex">
            <label
              className="text-white font-serif cursor-pointer"
              htmlFor="file"
            >
              Select Picture
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              onChange={handleImageChange}
              required
            />
            <FaImage
              style={{
                color: "#8da4f1",
                fontSize: "25px",
                marginLeft: "5px",
                cursor: "pointer",
              }}
            />
          </div>
          <Image
            className={`rounded-lg `}
            src={'/post5.jpeg'}
            alt="logo"
            height={260}
            width={260}
          />
          <input
            className="p-2 rounded-md mt-3 w-52 outline-none bg-teal-100 "
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="enter discription"
          />
          <input
            onChange={(e) => setCity(e.target.value)}
            className="p-2 rounded-md w-52 mt-3 outline-none   bg-teal-100 "
            type="text"
            placeholder="tage city(option)"
          />
          <Progress  value={loading} className={`w-[100%] mt-2 bg-teal-200 ${upload == true ? "" : "hidden"}`} />
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="w-[260px] mt-3" variant="outline">
                  Post Now
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Welcome to our post secton?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be done. This is only frontend demo
                    purpose. Thank you
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction><Link href={'/home'}>Go to home</Link></AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
