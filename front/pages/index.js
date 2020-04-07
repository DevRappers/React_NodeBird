import React from "react";
import { Input, Button, Card, Avatar } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined
} from "@ant-design/icons";

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: "DevRappers"
      },
      content: "첫 번째 게시글",
      img:
        "https://raw.githubusercontent.com/DevRappers/DevRappers.github.io/master/img/jobseekerall/job.png"
    }
  ]
};

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && (
        <div>
          <form style={{ marginBottom: 20 }} encType="multipart/form-data">
            <Input.TextArea
              maxLength={140}
              placeholder="어떤 신기한 일이 있었나요?"
            />
            <div>
              <input type="file" multiple hidden />
              <Button>이미지 업로드</Button>
              <Button
                type="primary"
                style={{ float: "right" }}
                htmlType="submit"
              >
                짹짹
              </Button>
            </div>
            <div>
              {dummy.imagePaths.map((v, i) => {
                return (
                  <div key={v} style={{ display: "inline-block" }}>
                    <img
                      src={"http://localhost:3065/" + v}
                      style={{ width: "200px" }}
                      alt={v}
                    />
                    <div>
                      <Button>제거</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </form>
          {dummy.mainPosts.map(c => {
            return (
              <Card
                key={+c.createdAt}
                cover={c.img && <img alt="example" src={c.img} />}
                actions={[
                  <RetweetOutlined />,
                  <HeartOutlined />,
                  <MessageOutlined />,
                  <EllipsisOutlined />
                ]}
                extra={<Button>팔로우</Button>}
              >
                <Card.Meta
                  avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
                  title={c.User.nickname}
                  description={c.content}
                />
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
