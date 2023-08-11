import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,

  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import DatePicker from "react-datepicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


const ReserveSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {firstName: "",email: "",type: "1",time: "1800"},
    onSubmit: (values) => {
      submit("", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    })
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === "success")
        formik.resetForm();
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#e8edec"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="reserve" color="black">
          Reserve a table
        </Heading>
        <Box p={6} rounded="md" w="100%" color="black">
          <form onSubmit={formik.handleSubmit} color="yellow">
            <VStack spacing={4}>
              <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type" color="black">Number of people</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")} >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type" color="black">Time</FormLabel>
                <Select id="time" name="time" {...formik.getFieldProps("time")} >
                  <option value="1800">18:00</option>
                  <option value="1830">18:30</option>
                  <option value="1900">19:00</option>
                  <option value="1930">19:30</option>
                  <option value="2000">20:00</option>
                  <option value="2030">20:30</option>
                </Select>
              </FormControl>
              <Button type="submit" color="white"backgroundColor="#495e57" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ReserveSection;
