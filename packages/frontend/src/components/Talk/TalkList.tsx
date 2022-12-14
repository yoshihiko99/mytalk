import React from "react";

import Item from "@/components/Common/Item";
import List from "@/components/Common/List";
import CreateTalkButton from "@/components/Talk/CreateTalkButton";
import TaskListItem from "@/components/Talk/TalkListItem";
import { TalkListItem } from "@/lib/type/talkType";

interface Props {
  talks?: TalkListItem[];
  myId?: number;
}
const TalkList: React.FC<Props> = (props) => {
  return (
    <List
      header={
        <>
          <div className="text-xl font-semibold">Talks</div>
          {/* TODO: unread count */}
          {/*<div className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">*/}
          {/*  5*/}
          {/*</div>*/}
        </>
      }
      items={
        props.talks?.length !== 0 ? (
          props.talks?.map((talk, i) => {
            return <TaskListItem talk={talk} myId={props.myId} />;
          })
        ) : (
          <Item>
            <p>No Talks...</p>
          </Item>
        )
      }
      outItems={
        <div className="absolute bottom-0 right-0 mr-2">
          <CreateTalkButton />
        </div>
      }
    />
  );
};

export default TalkList;
