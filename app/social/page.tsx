import Link from "next/link"

export default function SocialMedia() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h1 className="mb-4">Social Media</h1>
          <ul className="list-group">
            <li className="list-group-item">
              <Link href="https://instagram.com/artist" className="text-decoration-none">
                Instagram
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="https://twitter.com/artist" className="text-decoration-none">
                Twitter
              </Link>
            </li>
            <li className="list-group-item">
              <Link href="https://facebook.com/artist" className="text-decoration-none">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

