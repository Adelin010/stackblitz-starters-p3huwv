import { ReactElement, ReactNode } from 'react';

interface FormStyledType {
  title: string;
  children: ReactNode;
}

export default function FormStyle({ title, children }: FormStyledType) {
  return (
    <>
      <h2 style={{ textAlign: 'center', margin: '0', marginBottom: '2rem' }}>
        {title}
      </h2>
      <div
        style={{
          display: 'grid',
          gap: '1rem .5rem',
          gridTemplateColumns: 'auto minmax(auto, 400px)',
          justifyContent: 'start',
        }}
      >
        {children}
      </div>
    </>
  );
}
