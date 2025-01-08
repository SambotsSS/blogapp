import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/Menu/Menu";

async function fetchPosts(page = 1) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"; // Use environment variable or fallback to localhost
        const res = await fetch(`${baseUrl}/api/posts?page=${page}`, {
            cache: "no-store", // Ensures fresh data
        });
        if (!res.ok) {
            throw new Error("Failed to fetch posts.");
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

const BlogPage = async ({ searchParams }) => {
    const page = parseInt(searchParams?.page || 1); // Extract page number from URL
    const data = await fetchPosts(page);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Style Blog</h1>
            <div className={styles.content}>
                <CardList data={data} />
                <Menu />
            </div>
        </div>
    );
};

export default BlogPage;
