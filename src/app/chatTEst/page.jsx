"use client";
import { database } from "@/lib/firebaseConfig";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  ref,
  set,
  push,
  query,
  orderByChild,
  equalTo,
  get,
  update,
  getDatabase,
  onValue,
} from "firebase/database";

function Page() {
  const router = useRouter();

  const { data: session, status } = useSession();
  if (status === "unauthenticated") router.push("/");
  const [adminMessages, setAdminMessages] = useState([]);

  useEffect(() => {
    // const database = getDatabase();
    const usersRef = ref(database, "users");
    onValue(usersRef, async () => {
      const q = query(
        usersRef,
        orderByChild("email"),
        equalTo(session?.user?.email) // use full email
      );
      const snapshot = await get(q);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const userId = Object.keys(data)[0]; // get the first matching user ID
        const user = data[userId];

        console.log("🔄 Database changed:");
        console.log(user.messages);
        setAdminMessages(user.messages || []);
        console.log("User ID:", session?.user?.email);
      }
    });
    console.log("Page component mounted");
    return () => {
      // No direct unsubscribe for onValue with async callback, but cleanup can be handled if needed
    };
  }, []);

  return <div>page</div>;
}

export default Page;
