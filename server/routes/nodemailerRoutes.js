// const APIHandler = require("../services/APIHandler.js");
const router = require("express").Router();
const transporter = require("../config/nodemailer.config");
const Ticket = require("../models/Ticket.model");

router.post("/finish/:ticketId", (req, res, next) => {
  const {ticketId} = req.params;

  // const {ticketId, match_id, numberOfTickets, totalPrice} = req.params;
  // console.log(ticketId, match_id, numberOfTickets, totalPrice, "Req.Params");

  //   const matchId = ticket.match_id

  //   const matchesResponse = API.getMatch(matchId);

  // Promise.all([matchesResponse])
  //     .then((data) => {
  //       const [matchesResponse] = data;
  //       //   const standings = positionsResponse.data.response[0].league.standings[0]; // TODO: queremos uno o todos los que haya?? el 'ultimo [0]
  //       const matches = matchesResponse.data.response;
  //       res.json(matches);
  //       //!! Conversion a Boolean
  //     })
  //     .catch((err) => console.log(err));
  // });

  Ticket.findById(ticketId)
    .populate("owner")
    .then((ticket) => {
      let eachPrice = ticket.totalPrice / ticket.numberOfTickets;
      const email = ticket.infoPurchase;
      const subject = "FooTicket - Confirmación de compra";

      const message = `<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css">
	<!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		@media (max-width:520px) {
			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.row-1 .column-1 .block-1.heading_block h1 {
				font-size: 23px !important;
			}

			.row-1 .column-1 .block-8.divider_block td.pad {
				padding: 10px 0 !important;
			}

			.row-1 .column-1 .block-8.divider_block .alignment table {
				display: inline-table;
			}

			.row-1 .column-1 .block-10.heading_block h2,
			.row-1 .column-1 .block-7.heading_block h2 {
				font-size: 14px !important;
			}

			.row-1 .column-1 .block-3.heading_block h1,
			.row-1 .column-1 .block-6.heading_block h2,
			.row-1 .column-1 .block-9.heading_block h2 {
				font-size: 16px !important;
			}

			.row-1 .column-1 .block-2.heading_block h2,
			.row-1 .column-1 .block-4.heading_block h2 {
				font-size: 20px !important;
			}

			.row-1 .column-1 .block-9.heading_block td.pad {
				padding: 0 !important;
			}

			.row-1 .column-1 {
				padding: 35px !important;
			}
      
		}
	</style>
</head>

<body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; border-radius: 0; width: 500px;" width="500">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 30px; padding-right: 30px; vertical-align: top; padding-top: 15px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-bottom:15px;padding-top:15px;text-align:center;width:100%;">
																<h1 style="margin: 0; color: #2f2f2f; direction: ltr; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif; font-size: 35px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Confirmación de Compra</span></h1>
															</td>
														</tr>
													</table>
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;">
																<h2 style="margin: 0; color: #2f2f2f; font-size: 25px; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${ticket.teamHome}</span></h2>
															</td>
														</tr>
													</table>
													<table class="heading_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;">
																<h1 style="margin: 0; color: #2f2f2f; font-size: 16px; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">vs</span></h1>
															</td>
														</tr>
													</table>
													<table class="heading_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;">
																<h2 style="margin: 0; color: #2f2f2f; font-size: 25px; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">${ticket.teamAway}</span></h2>
															</td>
														</tr>
													</table>
													<table class="divider_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-top:25px;padding-bottom:30px;">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #2F2F2F;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="heading_block block-6" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;">
																<h2 style="margin: 0; color: #2f2f2f; font-size: 19px; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Cantidad de entradas</span></h2>
															</td>
														</tr>
													</table>
													<table class="heading_block block-7" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;">
																<h2 style="margin: 0; color: #2f2f2f; font-size: 19px; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder"><strong>${ticket.numberOfTickets}</strong></span></h2>
															</td>
														</tr>
													</table>
													<table class="divider_block block-8" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="padding-top:25px;padding-bottom:30px;">
																<div class="alignment" align="center">
																	<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #2F2F2F;"><span>&#8202;</span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table class="heading_block block-9" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;">
																<h2 style="margin: 0; color: #2f2f2f; font-size: 19px; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Subtotal</span></h2>
															</td>
														</tr>
													</table>
													<table class="heading_block block-10" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;text-align:center;padding-bottom:25px;">
																<h2 style="margin: 0; color: #2f2f2f; font-size: 19px; font-family: 'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 400; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder"><strong>€${ticket.totalPrice}</strong></span></h2>
															</td>
														</tr>
													</table>
													<table class="html_block block-11" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad">
																<div style="font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;" align="center">
                                </div>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-13" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad" style="padding-top:120px;">
																<div style="color:#101112;font-size:11px;font-family:'Source Sans Pro', Tahoma, Verdana, Segoe, sans-serif;font-weight:400;line-height:120%;text-align:left;direction:ltr;letter-spacing:0px;mso-line-height-alt:13.2px;">
																	<p style="margin: 0; margin-bottom: 0px;">FooTicket</p>
																	<p style="margin: 0;">Manuel Pascual&nbsp;</p>
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</body>

</html>`;

      const matchId = ticket.match_id;

      res.status(200).json(ticket);

      transporter.sendMail({
        from: '"FooTicket" <mmmppp01@outlook.com>',
        to: `${email}`,
        subject: `${subject}`,
        text: `${message}`,
        html: `<b>${message} </b>  `,
      });
    });
});

module.exports = router;
