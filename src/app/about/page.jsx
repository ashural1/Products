import React from "react";
import Link from "next/link";

function About() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   ml-10 ">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Instagram</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
          <Link href={`https://www.instagram.com/ashurali.l7/?utm_source=ig_web_button_share_sheet`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2111/2111644.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">telegram</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
          <Link href={`https://t.me/Ashurali_818`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">github</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link href={`https://github.com/ashural1`}>
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    // https://www.instagram.com/ashurali.l7/?utm_source=ig_web_button_share_sheet
    // https://t.me/Ashurali_818
    // https://cdn-icons-png.flaticon.com/128/2111/2111644.png
    // "https://cdn-icons-png.flaticon.com/128/733/733609.png
    // https://cdn-icons-png.flaticon.com/128/174/174855.png
  );
}

export default About;
