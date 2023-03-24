import Link from "next/link";
import Image from "next/image";

function PostCard({ post }) {
  return (
    <Link href={post.uri} className={"card"}>
      <a className="cardHolder">
        <div className="card">
          {post.featuredImage && (
            <div className="featured-image">
              <Image
                className="card-image"
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                width={640}
                height={480}
              />
            </div>
          )}
          <div className="cont">
            <h3 className="text-title">{post.title}</h3>

            <p className="card-description">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default PostCard;
