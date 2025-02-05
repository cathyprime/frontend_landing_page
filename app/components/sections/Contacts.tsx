'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Imię jest za krótkie')
    .max(50, 'Imię jest za długie')
    .required('Imię jest wymagane'),
  email: Yup.string()
    .email('Nieprawidłowy format email')
    .required('Email jest wymagany'),
  phone: Yup.string()
    .matches(/^[0-9\s+()-]*$/, 'Nieprawidłowy format numeru telefonu'),
  message: Yup.string()
    .min(10, 'Wiadomość jest za krótka')
    .required('Wiadomość jest wymagana')
})

const Contact: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }

  const handleSubmit = (values: FormValues, { setSubmitting, resetForm }: any) => {
    // Tutaj dodaj logikę wysyłania formularza
    console.log(values)
    setTimeout(() => {
      setSubmitting(false)
      resetForm()
    }, 400)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Nagłówek sekcji */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skontaktuj się z nami</h2>
            <p className="text-gray-600">
              Masz pytania? Chętnie na nie odpowiemy. Skorzystaj z formularza poniżej.
            </p>
          </div>

          {/* Formularz kontaktowy */}
          <Formik
            initialValues={initialValues}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, touched, errors }) => (
              <Form className="space-y-6">
                {/* Imię */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Imię i nazwisko *
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      touched.name && errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <ErrorMessage 
                    name="name" 
                    component="p" 
                    className="mt-1 text-sm text-red-500" 
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <ErrorMessage 
                    name="email" 
                    component="p" 
                    className="mt-1 text-sm text-red-500" 
                  />
                </div>

                {/* Telefon */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Numer telefonu (opcjonalnie)
                  </label>
                  <Field
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      touched.phone && errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <ErrorMessage 
                    name="phone" 
                    component="p" 
                    className="mt-1 text-sm text-red-500" 
                  />
                </div>

                {/* Wiadomość */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Wiadomość *
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      touched.message && errors.message ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <ErrorMessage 
                    name="message" 
                    component="p" 
                    className="mt-1 text-sm text-red-500" 
                  />
                </div>

                {/* Submit button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 bg-blue-600 text-white rounded-lg 
                      ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} 
                      transition-colors`}
                  >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Contact
