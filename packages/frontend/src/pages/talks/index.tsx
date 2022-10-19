import Head from "next/head";
import React, { useEffect, useState } from "react";

import AuthLayout from "@/components/Common/Layouts/AuthLayoutWithHeaderFooter";
import TalkList from "@/components/Talk/TalkList";
import talkAPI from "@/lib/api/talk";
import { Talk } from "@/lib/type/talkType";

const Index = () => {
  const [talks, setTalks] = useState<Talk[]>();

  useEffect(() => {
    void (async () => {
      const { data, status } = await talkAPI.getTalks(
        window.localStorage.getItem("accessToken")!
      );
      if (status === 200) {
        setTalks(
          data.talks.concat(
            data.talks.concat(
              data.talks.concat(
                data.talks.concat(
                  data.talks.concat(
                    data.talks.concat(
                      data.talks.concat(
                        data.talks.concat(data.talks.concat(data.talks))
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
    })();
  }, []);

  return (
    <AuthLayout>
      <Head>
        <title>MyTalk - Talk</title>
      </Head>

      <div className="flex h-[calc(100vh-64px)] flex-col items-center bg-gray-100 p-2 sm:p-12">
        <div className="h-full w-full bg-white px-6 py-4 sm:max-w-lg sm:rounded-lg sm:shadow-md md:max-w-xl lg:max-w-2xl">
          <TalkList talks={talks} />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Index;
