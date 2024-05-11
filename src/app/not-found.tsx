import { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main>
      <section className="bg-white text-gray-700">
        <div className="layout flex min-h-screen flex-col items-center justify-center text-center ">
          <h1 className="text-2xl ">Parece que la página que estás buscando no existe.</h1>
          <Link className="mt-10 bg-blue-500 py-1 px-2 rounded-md white text-white align-bottom hover:bg-blue-600 hover:scale-105" href="/">Volver</Link>
        </div>
      </section>
    </main>
  );
}