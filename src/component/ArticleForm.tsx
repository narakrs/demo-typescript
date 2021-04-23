import { Form, Input, Button, Select } from 'antd';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
};
const tailLayout = {
    wrapperCol: { offset: 4, span: 24 },
};
type CardProps = {
    onAddArticle: (title: string,body:string,status:number) => void;
    title: string,
    body:string,
    status:number
}
const ArticleForm = ({onAddArticle,title,body,status}: CardProps) => {

    const onFinish = (values: any) => {
        const { title, body, status } = values;
        onAddArticle(title,body,status);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <h2 style={{ width: '100%', textAlign: 'center' }}>Article</h2>
            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'Please input your Title!' },
                        { min: 8, message: 'Title must be minimum 8 characters!'}
                    ]}
                initialValue={title}
            >
                <Input  />
            </Form.Item>

            <Form.Item
                label="Body"
                name="body"
                rules={[{ required: true, message: 'Please input your body!' }]}
                initialValue={body}
            >
                <Input />
            </Form.Item>
            <Form.Item label="Select"
                name="status"
                rules={[{ required: true, message: 'Please input your body!' }]}
                initialValue={status}>
                <Select>
                    <Select.Option value={0} key={0}>insue</Select.Option>
                    <Select.Option value={1}  key={1}>process</Select.Option>
                    <Select.Option value={2}  key={2}>Done</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type={title===""?"primary":"ghost"} htmlType="submit">{title===""?"Add Article":"Edit Article"}</Button>
            </Form.Item>
        </Form>
    );
};
export default ArticleForm;
