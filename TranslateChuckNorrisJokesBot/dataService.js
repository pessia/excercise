import axios from "axios";
import cheerio from "cheerio";

export async function scrapeWebPage() {
  try {
    const config = {
      headers: {
        "Accept-Encoding": "gzip, deflate, br",
      },
      params: {
        antibot: "true",
        premium_proxy: "true",
      },
    };

    const response = await axios.get(
      "https://parade.com/968666/parade/chuck-norris-jokes",
      config
    );

    if (response.status === 200) {
      const $ = cheerio.load(response.data);

      const listItems = $(".entry-content ol li");

      listItems.each((index, element) => {
        const listItemText = $(element).text();
        console.log(`${index + 1}. ${listItemText}`);
      });
    } else {
      console.log("Error: Failed to fetch the webpage");
    }
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

scrapeWebPage();
