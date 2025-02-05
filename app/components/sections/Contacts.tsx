"use client";
import React, { useReducer, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Typy dla stanu formularza
type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormState {
  status: FormStatus;
  errorMessage: string | null;
  successMessage: string | null;
  submitCount: number;
  isValidating: boolean;
  lastSubmitTime: number | null;
}

// Typy dla akcji
type FormAction =
  | { type: "SUBMIT_START" }
  | { type: "SUBMIT_SUCCESS" }
  | { type: "SUBMIT_ERROR"; payload: string }
  | { type: "RESET_FORM" }
  | { type: "START_VALIDATION" }
  | { type: "END_VALIDATION" };

// Stan początkowy
const initialState: FormState = {
  status: "idle",
  errorMessage: null,
  successMessage: null,
  submitCount: 0,
  isValidating: false,
  lastSubmitTime: null,
};

// Reducer do zarządzania stanem formularza
const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SUBMIT_START":
      return {
        ...state,
        status: "submitting",
        errorMessage: null,
        successMessage: null,
      };
    case "SUBMIT_SUCCESS":
      return {
        ...state,
        status: "success",
        submitCount: state.submitCount + 1,
        successMessage: "Wiadomość została wysłana pomyślnie!",
        lastSubmitTime: Date.now(),
      };
    case "SUBMIT_ERROR":
      return {
        ...state,
        status: "error",
        errorMessage: action.payload,
      };
    case "RESET_FORM":
      return {
        ...initialState,
        submitCount: state.submitCount,
      };
    case "START_VALIDATION":
      return {
        ...state,
        isValidating: true,
      };
    case "END_VALIDATION":
      return {
        ...state,
        isValidating: false,
      };
    default:
      return state;
  }
};

const Contact: React.FC = () => {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (values: any, { resetForm }: any) => {
    dispatch({ type: "SUBMIT_START" });

    try {
      // Symulacja wysyłania formularza
      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch({ type: "SUBMIT_SUCCESS" });
      resetForm();

      // Automatyczny reset komunikatu sukcesu
      setTimeout(() => {
        dispatch({ type: "RESET_FORM" });
      }, 3000);
    } catch (error) {
      dispatch({
        type: "SUBMIT_ERROR",
        payload:
          "Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Nagłówek sekcji */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skontaktuj się z nami
            </h2>
            <p className="text-gray-600 mb-8">
              Masz pytania? Chętnie na nie odpowiemy. Skorzystaj z formularza
              poniżej.
            </p>

            {/* Status formularza */}
            {formState.successMessage && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                {formState.successMessage}
              </div>
            )}
            {formState.errorMessage && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                {formState.errorMessage}
              </div>
            )}
          </div>

          {/* Formularz */}
          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .required("Imię jest wymagane")
                .min(2, "Imię musi mieć co najmniej 2 znaki"),
              email: Yup.string()
                .email("Nieprawidłowy adres email")
                .required("Email jest wymagany"),
              subject: Yup.string()
                .required("Temat jest wymagany")
                .min(5, "Temat musi mieć co najmniej 5 znaków"),
              message: Yup.string()
                .required("Wiadomość jest wymagana")
                .min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form ref={formRef} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pola formularza */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Imię i nazwisko *
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email *
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-sm text-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Temat *
                  </label>
                  <Field
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="mt-1 text-sm text-red-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Wiadomość *
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="mt-1 text-sm text-red-600"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || formState.status === "submitting"}
                    className={`px-8 py-3 bg-blue-600 text-white rounded-lg transition-all
                      ${
                        isSubmitting || formState.status === "submitting"
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-blue-700"
                      }`}
                  >
                    {formState.status === "submitting"
                      ? "Wysyłanie..."
                      : "Wyślij wiadomość"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          {/* Licznik wysłanych formularzy */}
          {formState.submitCount > 0 && (
            <div className="text-center mt-4 text-sm text-gray-500">
              Liczba wysłanych formularzy: {formState.submitCount}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
