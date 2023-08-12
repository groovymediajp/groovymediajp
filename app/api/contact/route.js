import { NextResponse } from "next/server";

const zendesk = require("node-zendesk");

function handleError(err) {
  console.log(err);
  process.exit(-1);
}

export async function createTicket(params) {
  const client = zendesk.createClient({
    username: "sysadmin@groovymedia.jp",
    token: process.env.ZENDESK_API_KEY,
    remoteUri: "https://groovymedia.zendesk.com/api/v2",
  });

  const content = `種別: ${params.type}\n会社名: ${params.company}\nお名前: ${params.name}\nメールアドレス: ${params.email}\n電話番号: ${params.phone}\n内容:\n ${params.content}`;

  var ticket = {
    ticket: {
      requester: {
        name: params.company + " " + params.name,
        email: params.email,
      },
      subject: "[" + params.type + "] " + params.company + " " + params.name,
      comment: {
        body: content,
      },
    },
  };

  await new Promise((resolve, reject) => {
    client.tickets.create(ticket, function (err, req, result) {
      if (err) return reject(err);
      resolve(result);
    });
  });
}

export async function POST(req, { params }) {
  //   const id = params.slug;
  const json = await req.json();

  const zendeskResponse = await createTicket(json);

  return NextResponse.json(
    { message: "Hello World", zendeskResponse },
    { status: 200 }
  );
}
