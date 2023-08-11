import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";


function Alert() {
  const { isOpen, type,onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {isSuccess ? 'Thank You! Your confirmation number: 124563133333' : 'Oops!'}
          </AlertDialogHeader>
          <AlertDialogBody>{"Please check Your Email to review all information"}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
