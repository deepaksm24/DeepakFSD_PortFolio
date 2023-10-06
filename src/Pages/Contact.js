import React, { useState } from "react";
import { Button, Col, Form, Modal, Row, message } from "antd";
import emailjs from '@emailjs/browser';

function Contact() {
  const [form] = Form.useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (v) => {
    try {
        
        var templateParams = {
            from_name: v.name,
            message: v.message,
            phone : v.phone,
            email: v.email
        };

        emailjs.send("service_qylmbj8", "template_ezwa7ik", templateParams,"CkfuDJ-duNCfP-K5L")
        .then(function(response) {
        //    console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        //    console.log('FAILED...', error);
        });
  message.success(`Thank You ${v.name} For Contacting`);
      setIsModalOpen(false);

      form.resetFields();

    } catch (error) {

        setIsModalOpen(false);


    }
    
     
    
  };

  return (
    <div>
      <div className="d-flex justify-content-center gap-3 mt-5 h-100">
        <Button type="primary" onClick={showModal}>
          Contact Me
        </Button>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Please Fill the Details"
        footer={null}
        width={700}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Row gutter={8}>
            <Col span={14}>
              <Form.Item label="Name" name="name"
               rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
              >
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>

            <Col span={14}>
              <Form.Item label="Email" name="email"
               rules={[
                {
                  required: true,
                  message: 'Please input your email id',
                },
              ]}
              >
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>

            <Col span={10}>
              <Form.Item label="Contact No" name="phone">
                <input className="w-100" type="text" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Message" name="message"
               rules={[
                {
                  required: true,
                  message: 'Please input your message!',
                },
              ]}
              >
                <textarea className="w-100" type="text" />
              </Form.Item>
            </Col>
          </Row>
          <div className="d-flex justify-content-center gap-3">
            <Button type="primary" htmlType="submit" success className="w-50">
              Send
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default Contact;
