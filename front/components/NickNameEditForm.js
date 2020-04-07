import React from "react";
import { Button, Input } from "antd";

const NickNameEditForm = () => {
  return (
    <form
      style={{
        marginBottom: "20px",
        border: "1px solid #d9d9d9",
        padding: "20px"
      }}
    >
      <Input addonBefore="닉네임" />
      <Button type="primary">수정</Button>
    </form>
  );
};

export default NickNameEditForm;
