"use client";

import Image from "next/image";
import styles from "./writePage.module.css";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// Dynamically import ReactQuill to disable SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const { status } = useSession(); // Get session status
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect unauthenticated users to the login page
      router.push("/login");
    }
  }, [status, router]);

  // Show loading state while session status is "loading"
  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  // Render the page only for authenticated users
  if (status === "authenticated") {
    return (
      <div className={styles.container}>
        {/* Title Input */}
        <input type="text" placeholder="Title" className={styles.input} />

        {/* Editor Section */}
        <div className={styles.editor}>
          {/* Add Media Button */}
          <button className={styles.button} onClick={() => setOpen(!open)}>
            <Image src="/plus.png" alt="Add" width={16} height={16} />
          </button>

          {open && (
            <div className={styles.add}>
              <button className={styles.addButton}>
                <Image src="/image.png" alt="Add Image" width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <Image src="/external.png" alt="Add Link" width={16} height={16} />
              </button>
              <button className={styles.addButton}>
                <Image src="/video.png" alt="Add Video" width={16} height={16} />
              </button>
            </div>
          )}

          {/* Text Editor */}
          <ReactQuill
            className={styles.textArea}
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>

        {/* Publish Button */}
        <button className={styles.publish}>Publish</button>
      </div>
    );
  }

  // Return null for any unexpected cases
  return null;
};

export default WritePage;
