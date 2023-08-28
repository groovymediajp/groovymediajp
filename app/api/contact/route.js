import { NextResponse } from "next/server";

// export const runtime = "edge";

function handleError(err) {
  console.log(err);
  process.exit(-1);
}

export async function createTicket(params) {
  const zendesk = require("node-zendesk");
  const client = zendesk.createClient({
    username: "sysadmin@groovymedia.jp",
    token: process.env.ZENDESK_API_KEY,
    remoteUri: "https://groovymedia.zendesk.com/api/v2",
  });

  const typetext = params.type || params.appinquirytype;

  const metadata = { ...params };
  delete metadata.type;
  delete metadata.appinquirytype;
  delete metadata.company;
  delete metadata.name;
  delete metadata.email;
  delete metadata.phone;
  delete metadata.content;

  const customfields = [];
  if (params.appinquirytype) {
    customfields.push({
      id: 15193879959449,
      value: params.appinquirytype,
    });
  }
  if (params.appname) {
    customfields.push({
      id: 14568530336281,
      value: params.appname,
    });
  }
  if (params.shopifyadmin) {
    customfields.push({
      id: 14568619690009,
      value: params.shopifyadmin,
    });
  }

  const metadatatext = Object.keys(metadata)
    .map((key) => {
      return `${key}: ${metadata[key]}`;
    })
    .join("\n");

  const content = `種別: ${typetext}\n会社名: ${params.company}\nお名前: ${
    params.name
  }\nメールアドレス: ${params.email}\n電話番号: ${params.phone}\n${
    metadatatext ? metadatatext + "\n" : ""
  }内容:\n ${params.content}`;

  var ticket = {
    ticket: {
      requester: {
        name: params.company + " " + params.name,
        email: params.email,
      },
      subject: "[" + typetext + "] " + params.company + " " + params.name,
      comment: {
        body: content,
      },
      metadata,
      custom_fields: customfields,
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
