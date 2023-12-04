import { Alert, Button } from "antd";
import React, { useState } from "react";
import { Typography, Card } from 'antd';

const { Paragraph } = Typography;

const Posts = ({ error, posts, handleAddPost }) => {
    const [text, setText] = useState('sdfdgf');

    return (
        <>
            <Button loading={true} onClick={handleAddPost} danger type="primary" size="large">ADD</Button>
            <Paragraph
            editable={{
                onChange: setText,
                icon: <div>!</div>,
                tooltip: 'Нажми для редактирования',
                triggerType: ['icon', 'text']
            }}
            >{text}</Paragraph>

            <ul>
                {posts.map((post) => {
                    return (
                        <li>
                            <Card title={post.title} bordered={false} style={{ width: 300 }}>
                                {post.body}
                            </Card>
                        </li>
                    );
                })}
            </ul>

            {error && <Alert message={error} type="error" closable showIcon/>}
        </>
    );
}

export default Posts;