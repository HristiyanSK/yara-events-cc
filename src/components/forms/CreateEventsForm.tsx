import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import { EventItem, EventData } from "../../types/types";

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 15px;
  padding-bottom: 25px;
  gap: 2%;
  border-bottom: 1px solid #eaeaea;
`;
const InputBlock = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 12px;
  flex: 1 1 48%;
  label {
    font-size: 14px;
    opacity: 0.8;
  }
  input {
    margin-top: 6px;
    padding: 8px;
    height: 42px;
    border-radius: 4px;
    border: 1px solid #c3c3c3;
    background: #f1f1f1;
  }
`;
const SubmitButton = styled.button`
  padding: 12px 16px;
  margin-top: 16px;
  color: #fff;
  font-weight: 700;
  border: none;
  background: #456ef1;
  border-radius: 8px;
  align-self: flex-end;
  height: 42px;
`;

interface CreateEventFormProps {
  setEventList: React.Dispatch<React.SetStateAction<EventItem[]>>;
}

const CreateEventForm: React.FC<CreateEventFormProps> = ({ setEventList }) => {
  const [eventData, setEventData] = useState<EventData>({
    name: "",
    date: "",
    location: "",
    ticket: "",
    picture: null,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handlePictureChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target?.files[0];
    setEventData((prevData: any) => ({ ...prevData, picture: file || null }));
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newEvent: EventItem = {
      ...eventData,
      id: Date.now().toString(),
    };

    setEventList((prevList: EventItem[]) => [...prevList, newEvent]);
    toast.success("Successfully created event!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });

    setEventData({
      name: "",
      date: "",
      location: "",
      ticket: "",
      picture: null,
    });
  };

  const formFields = [
    { name: "name", label: "Event name", type: "text" },
    { name: "date", label: "Event date", type: "date" },
    { name: "location", label: "Event location", type: "text" },
    { name: "ticket", label: "Ticket price", type: "text" },
    {
      name: "picture",
      label: "Event image",
      type: "file",
      accept: "image/*",
    },
  ];

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        {formFields.map(({ name, label, type, accept }) => (
          <InputBlock key={name}>
            <label htmlFor={`event-${name}`}>{label}:</label>
            {type === "file" ? (
              <input
                type={type}
                id={`event-${name}`}
                accept={accept}
                onChange={handlePictureChange}
              />
            ) : (
              <input
                type={type}
                id={`event-${name}`}
                name={name}
                required
                // type assertion here to explicitly treat value as string
                value={eventData[name as keyof EventData] as string}
                onChange={handleInputChange}
              />
            )}
          </InputBlock>
        ))}
        <SubmitButton type="submit">Create Event</SubmitButton>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default CreateEventForm;
