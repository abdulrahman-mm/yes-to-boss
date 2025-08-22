"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const tableData = [
  {
    return: "GSTR-1",
    purpose: "Details of outward supplies (sales)",
    dueDate: "11th of next month (Monthly) / 13th after quarter (QRMP)",
  },
  {
    return: "GSTR-3B",
    purpose: "tax liabilities, ITC claimed, and net tax payable",
    dueDate: "20th (Monthly)",
  },
  {
    return: "GSTR-4",
    purpose: "Annual return for Composition Scheme",
    dueDate: "30th April after FY",
  },

  {
    return: "GSTR-5",
    purpose: "Return for non-resident taxpayers",
    dueDate: "20th of next month",
  },
  {
    return: "GSTR-5A",
    purpose: "Return for OIDAR services",
    dueDate: "20th of each month",
  },

  {
    return: "GSTR-6",
    purpose: "Input Service Distributors",
    dueDate: "13th of each month",
  },
  {
    return: "GSTR-7",
    purpose: "TDS deductors",
    dueDate: "10th of each month",
  },
  {
    return: "GSTR-8",
    purpose: "E-commerce operators",
    dueDate: "10th of each month",
  },
  {
    return: "GSTR-9",
    purpose: "Annual return for regular taxpayers",
    dueDate: "31st Dec after FY",
  },

  {
    return: "CMP-08",
    purpose: "Composition taxpayers (quarterly tax)",
    dueDate: "18th of month after quarter",
  },

  {
    return: "GSTR-2A / 2B",
    purpose: "Inward supply reconciliation (read-only)",
    dueDate: "Auto-generated",
  },

  {
    return: "GSTR-9C",
    purpose: "Reconciliation statement with audit",
    dueDate: "31st Dec after FY",
  },

  {
    return: "ITC-04",
    purpose: "Job work related returns",
    dueDate: "Periodically",
  },
];

const GSTTypesOfGSTReturns = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const rowRefs = useRef<HTMLTableRowElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      // Animate table
      gsap.from(tableRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top 85%",
        },
      });

      // Animate rows stagger
      rowRefs.current.forEach((row, i) => {
        gsap.from(row, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.15, // stagger effect
          scrollTrigger: {
            trigger: row,
            start: "top 120%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gradient-to-b general-sans text-white from-[#212121] to-[#070707] min-h-screen p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16">
      {/* Heading */}
      <div ref={headingRef} className="will-change-transform translate-z-0">
        <p className="text-4xl md:text-5xl font-semibold leading-tight">
          Types of GST Returns
        </p>
        <p className="text-4xl md:text-5xl">You May Need to File</p>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table
          ref={tableRef}
          className="border border-white  mt-10 w-full text-left rounded-lg overflow-hidden will-change-transform translate-z-0"
        >
          <thead className="bg-white/10">
            <tr>
              <th
                colSpan={3}
                className="border border-white p-4 text-center text-lg md:text-xl font-semibold"
              >
                Types of GST Returns You May Need to File
              </th>
            </tr>
            <tr>
              <th className="border border-white p-4 px-6 md:px-8">Return</th>
              <th className="border border-white p-4 px-6 md:px-8">Purpose</th>
              <th className="border border-white p-4 px-6 md:px-8">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr
                key={i}
                ref={(el) => {
                  if (el) rowRefs.current[i] = el;
                }}
                className="hover:bg-white/10 transition-colors duration-300 will-change-transform translate-z-0"
              >
                <td className="border border-white p-4 px-6 md:px-12">
                  {item.return}
                </td>
                <td className="border border-white p-4 px-6 md:px-12">
                  {item.purpose}
                </td>
                <td className="border border-white p-4 px-6 md:px-12">
                  {item.dueDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GSTTypesOfGSTReturns;
