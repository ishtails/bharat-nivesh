'use client';
import React, { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';

const DisclosureComponent = ({ title, children } : {
    title: string;
    children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex text-left font-medium text-xl py-2">
            <span>{title}</span>
          </Disclosure.Button>

          <Transition
            show={open}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className="text-sm text-slate-600 px-4 pb-4">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default DisclosureComponent;
