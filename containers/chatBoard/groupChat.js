import React from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
const GroupChat = () => {
	return (
		<div className="messages custom-scroll" id="group_chat">
			<div className="contact-details">
				<div className="row">
					<div className="col">
						<div className="media left">
							<div className="media-left mr-3">
								<div className="profile online menu-trigger" style={{
										backgroundImage: `url('/assets/images/avtar/teq.jpg')`,
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										display: 'block',
									}}>
									<img
										className="bg-img img-fluid"
										src="/assets/images/avtar/teq.jpg"
										alt="Avatar"
										style={{ display: 'none' }}
									/>
								</div>
							</div>
							<div className="media-body">
								<h5>Tech Ninjas</h5>
								<div className="badge badge-success">Active</div>
							</div>
							<div className="media-right">
								<ul>
									<li>
										<a
											className="icon-btn btn-light button-effect mute"
											href="#"
										>
											<i className="fa fa-volume-up"></i>
										</a>
									</li>
									<li>
										<a
											className="icon-btn btn-light search search-right"
											href="#"
										>
											{" "}
											<Search />
										</a>
										<form className="form-inline search-form">
											<div className="form-group">
												<input
													className="form-control-plaintext"
													type="search"
													placeholder="Search.."
												/>
												<div className="icon-close close-search"> </div>
											</div>
										</form>
									</li>
									<li>
										<a
											className="icon-btn btn-light button-effect mobile-sidebar"
											href="#"
										>
											<ChevronsLeft />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col">
						<ul className="calls text-right">
							<li>
								<a className="icon-btn btn-light button-effect" href="#">
									<Phone />
								</a>
								<Modal className="fade show" id="confercall">
									<ModalBody>
										<div className="conferencecall call-modal">
											<img
												className="bg-img"
												src="/assets/images/avtar/big/audiocall.jpg"
												alt="Avatar"
											/>
											<div className="center-con text-center">
												<div className="usersprof">
													<div className="profile">
														<img
															className="bg-img"
															src="/assets/images/avtar/2.jpg"
															alt="Avatar"
														/>
													</div>
													<div className="profile">
														<img
															className="bg-img"
															src="/assets/images/avtar/3.jpg"
															alt="Avatar"
														/>
													</div>
													<div className="profile">
														<img
															className="bg-img"
															src="/assets/images/avtar/5.jpg"
															alt="Avatar"
														/>
													</div>
													<div className="profile">
														<img
															className="bg-img"
															src="/assets/images/avtar/big/videocall_bg.jpg"
															alt="Avatar"
														/>
													</div>
												</div>
												<p>Incoming Call</p>
												<h3>Conference Call</h3>
												<ul>
													<li>
														<a
															className="icon-btn btn-danger button-effect btn-xl is-animating cancelcall"
															href="#"
															data-dismiss="modal"
														>
															{" "}
															<i data-feather="phone"></i>
														</a>
													</li>
													<li>
														<a
															className="icon-btn btn-success button-effect btn-xl is-animating"
															href="#"
														>
															{" "}
															<i data-feather="video"></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</ModalBody>
								</Modal>
							</li>
							<li>
								<a className="icon-btn btn-light button-effect" href="#">
									<Video />
								</a>
								<Modal className="fade show" id="confvideocl">
									<ModalBody>
										<div className="row confimg">
											<div className="col-6">
												<div className="vclimg">
													<img
														className="bg-img"
														src="/assets/images/avtar/big/videocall_bg.jpg"
														alt="Avatar"
													/>
												</div>
											</div>
											<div className="col-6">
												<div className="vclimg">
													<img
														className="bg-img"
														src="/assets/images/avtar/5.jpg"
														alt="Avatar"
													/>
												</div>
											</div>
											<div className="col-6">
												<div className="vclimg">
													<img
														className="bg-img"
														src="/assets/images/avtar/2.jpg"
														alt="Avatar"
													/>
												</div>
											</div>
											<div className="col-6">
												<div className="vclimg">
													<img
														className="bg-img"
														src="/assets/images/avtar/3.jpg"
														alt="Avatar"
													/>
												</div>
											</div>
										</div>
									</ModalBody>
									<ModalFooter className="clfooter">
										<div id="basicUsage3">00:00:00</div>
										<ul>
											<li>
												<a
													className="icon-btn btn-light button-effect"
													href="#"
													data-tippy-content="speaker"
												>
													<i data-feather="volume-2"></i>
												</a>
											</li>
											<li>
												<a
													className="icon-btn btn-light button-effect"
													href="#"
													data-tippy-content="Camera"
												>
													<i data-feather="camera-off"></i>
												</a>
											</li>
											<li>
												<a
													className="icon-btn btn-light button-effect"
													href="#"
													data-tippy-content="Add Call"
												>
													<i data-feather="user-plus"></i>
												</a>
											</li>
											<li>
												<a
													className="icon-btn btn-danger button-effect btn-sm is-animating"
													href="#"
													data-dismiss="modal"
													data-tippy-content="Hangup"
												>
													<i data-feather="phone"></i>
												</a>
											</li>
											<li>
												<a
													className="icon-btn btn-light button-effect"
													href="#"
													data-tippy-content="Disable Video"
												>
													<i data-feather="video-off"></i>
												</a>
											</li>
											<li>
												<a
													className="icon-btn btn-light button-effect mic"
													href="#"
													data-tippy-content="Mute"
												>
													<i data-feather="mic-off"></i>
												</a>
											</li>
											<li>
												<a
													className="icon-btn btn-light button-effect"
													href="#"
													data-tippy-content="Hold"
												>
													<i data-feather="pause"></i>
												</a>
											</li>
										</ul>
									</ModalFooter>
								</Modal>
							</li>
							<li>
								<a
									className="icon-btn btn-light button-effect apps-toggle"
									href="#"
									data-tippy-content="All Apps"
								>
									<i className="ti-layout-grid2"></i>
								</a>
							</li>
							<li className="chat-friend-toggle">
								<a
									className="icon-btn btn-light bg-transparent button-effect outside"
									href="#"
									onClick={() => setQuickAction(!quickAction)}
								>
									<MoreVertical />
								</a>
								<div className="chat-frind-content"
									style={
										quickAction ? { display: "block" } : { display: "none" }
									}>
									<ul>
										<li>
											<a
												className="icon-btn btn-outline-primary button-effect btn-sm"
												href="#"
											>
												<User />
											</a>
											<h5>profile</h5>
										</li>
										<li>
											<a
												className="icon-btn btn-outline-success button-effect btn-sm"
												href="#"
											>
												<PlusCircle />
											</a>
											<h5>archive</h5>
										</li>
										<li>
											<a
												className="icon-btn btn-outline-danger button-effect btn-sm"
												href="#"
											>
												<Trash2 />
											</a>
											<h5>delete</h5>
										</li>
										<li>
											<a
												className="icon-btn btn-outline-light button-effect btn-sm"
												href="#"
											>
												<Slash />
											</a>
											<h5>block</h5>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="contact-chat">
				<ul className="chatappend">
					<li className="groupuser">
						<h4>Jewellery project</h4>
						<div className="gr-chat-friend-toggle">
							<a
								className="icon-btn btn-sm pull-right add-grbtn outside"
								href="#"
								data-tippy-content="Add User"
							>
								<Plus />
							</a>
							<div className="gr-chat-frind-content">
								<ul className="chat-main">
									<li>
										<div className="chat-box">
											<div className="media">
												<div className="profile offline">
													<img
														className="bg-img"
														src="/assets/images/contact/1.jpg"
														alt="Avatar"
													/>
												</div>
												<div className="details">
													<h5>Josephin water</h5>
													<h6>Alabma , USA</h6>
												</div>
												<div className="media-body">
													<a
														className="icon-btn btn-outline-primary btn-sm"
														href="#"
														data-tippy-content="Add User"
													>
														<i className="fa fa-plus"></i>
													</a>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="chat-box">
											<div className="media">
												<div className="profile">
													<img
														className="bg-img"
														src="/assets/images/contact/2.jpg"
														alt="Avatar"
													/>
												</div>
												<div className="details">
													<h5>Josephin water</h5>
													<h6>Alabma , USA</h6>
												</div>
												<div className="media-body">
													<a
														className="icon-btn btn-outline-primary btn-sm"
														href="#"
														data-tippy-content="Add User"
													>
														<i className="fa fa-plus"></i>
													</a>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="chat-box">
											<div className="media">
												<div className="profile">
													<img
														className="bg-img"
														src="/assets/images/contact/3.jpg"
														alt="Avatar"
													/>
												</div>
												<div className="details">
													<h5>Josephin water</h5>
													<h6>Alabma , USA</h6>
												</div>
												<div className="media-body">
													<a
														className="icon-btn btn-outline-primary btn-sm"
														href="#"
														data-tippy-content="Add User"
													>
														<i className="fa fa-plus"></i>
													</a>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="chat-box">
											<div className="media">
												<div className="profile unreachable">
													<img
														className="bg-img"
														src="/assets/images/contact/4.jpg"
														alt="Avatar"
													/>
												</div>
												<div className="details">
													<h5>Josephin water</h5>
													<h6>Alabma , USA</h6>
												</div>
												<div className="media-body">
													<a
														className="icon-btn btn-outline-primary btn-sm"
														href="#"
														data-tippy-content="Add User"
													>
														<i className="fa fa-plus"></i>
													</a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="gr-profile dot-btn dot-success grow">
							<img
								className="bg-img"
								src="/assets/images/avtar/3.jpg"
								alt="Avatar"
							/>
						</div>
						<div className="gr-profile dot-btn dot-success grow">
							<img
								className="bg-img"
								src="/assets/images/avtar/5.jpg"
								alt="Avatar"
							/>
						</div>
					</li>
					<li className="sent">
						<div className="media">
							<div className="profile mr-4">
								<img
									className="bg-img"
									src="/assets/images/contact/2.jpg"
									alt="Avatar"
								/>
							</div>
							<div className="media-body">
								<div className="contact-name">
									<h5>Josephin water</h5>
									<h6>01:35 AM</h6>
									<ul className="msg-box">
										<li className="msg-setting-main">
											<h5>
												Hi I am Josephin, can you help me to find best chat
												app?.{" "}
											</h5>
											<div className="msg-dropdown-main">
												<div className="msg-setting">
													<i className="ti-more-alt"></i>
												</div>
												<div className="msg-dropdown">
													<ul>
														<li>
															<a href="#">
																<i className="fa fa-share"></i>forward
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-clone"></i>copy
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-star-o"></i>rating
															</a>
														</li>
														<li>
															<a href="#">
																<i className="ti-trash"></i>delete
															</a>
														</li>
													</ul>
												</div>
											</div>
										</li>
										<li className="msg-setting-main">
											<h5> it should from elite auther &#128519;</h5>
											<div className="badge badge-success sm ml-2"> R</div>
											<div className="msg-dropdown-main">
												<div className="msg-setting">
													<i className="ti-more-alt"></i>
												</div>
												<div className="msg-dropdown">
													<ul>
														<li>
															<a href="#">
																<i className="fa fa-share"></i>forward
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-clone"></i>copy
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-star-o"></i>rating
															</a>
														</li>
														<li>
															<a href="#">
																<i className="ti-trash"></i>delete
															</a>
														</li>
													</ul>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</li>
					<li className="replies">
						<div className="media">
							<div className="profile mr-4">
								<img
									className="bg-img"
									src="/assets/images/avtar/1.jpg"
									alt="Avatar"
								/>
							</div>
							<div className="media-body">
								<div className="contact-name">
									<h5>Alan josheph</h5>
									<h6>01:40 AM</h6>
									<ul className="msg-box">
										<li className="msg-setting-main">
											<div className="msg-dropdown-main">
												<div className="msg-setting">
													<i className="ti-more-alt"></i>
												</div>
												<div className="msg-dropdown">
													<ul>
														<li>
															<a href="#">
																<i className="fa fa-share"></i>forward
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-clone"></i>copy
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-star-o"></i>rating
															</a>
														</li>
														<li>
															<a href="#">
																<i className="ti-trash"></i>delete
															</a>
														</li>
													</ul>
												</div>
											</div>
											<h5>
												Sure, chitchat is best theme for chating project, you
												can it check
												<a
													className="ml-1"
													href="https://themeforest.net/user/pixelstrap/portfolio"
													target="_blank"
												>
													here.
												</a>
											</h5>
										</li>
										<li className="msg-setting-main">
											<div className="msg-dropdown-main">
												<div className="msg-setting">
													<i className="ti-more-alt"></i>
												</div>
												<div className="msg-dropdown">
													<ul>
														<li>
															<a href="#">
																<i className="fa fa-share"></i>forward
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-clone"></i>copy
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-star-o"></i>rating
															</a>
														</li>
														<li>
															<a href="#">
																<i className="ti-trash"></i>delete
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="document">
												<i className="fa fa-file-excel-o font-primary"></i>
												<div className="details">
													<h5>Document.xlsx</h5>
													<h6>25mb Seprate file</h6>
												</div>
												<div className="icon-btns">
													<a
														className="icon-btn btn-outline-light"
														href="/assets/doc/Document.xlsx"
														target="_blank"
													>
														<Download />
													</a>
												</div>
											</div>
											<div className="badge badge-dark sm ml-2"> D</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</li>
					<li className="sent">
						<div className="media">
							<div className="profile mr-4">
								<img
									className="bg-img"
									src="/assets/images/contact/2.jpg"
									alt="Avatar"
								/>
							</div>
							<div className="media-body">
								<div className="contact-name">
									<h5>Josephin water</h5>
									<h6>01:42 AM</h6>
									<ul className="msg-box">
										<li className="msg-setting-main">
											<h5>I think it's best for my project.</h5>
											<div className="msg-dropdown-main">
												<div className="msg-setting">
													<i className="ti-more-alt"></i>
												</div>
												<div className="msg-dropdown">
													<ul>
														<li>
															<a href="#">
																<i className="fa fa-share"></i>forward
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-clone"></i>copy
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-star-o"></i>rating
															</a>
														</li>
														<li>
															<a href="#">
																<i className="ti-trash"></i>delete
															</a>
														</li>
													</ul>
												</div>
											</div>
										</li>
										<li className="msg-setting-main">
											<ul className="auto-gallery">
												<li>
													<img
														className="bg-img"
														src="/assets/images/media/1.jpg"
														alt="Avatar"
													/>
												</li>
												<li>
													{" "}
													<img
														className="bg-img"
														src="/assets/images/media/2.jpg"
														alt="Avatar"
													/>
												</li>
												<li>
													{" "}
													<img
														className="bg-img"
														src="/assets/images/media/3.jpg"
														alt="Avatar"
													/>
												</li>
											</ul>
											<div className="badge badge-danger sm ml-2"></div>
											<div className="badge badge-outline-primary refresh sm ml-2">
												{" "}
												<RotateCw />
											</div>
											<div className="msg-dropdown-main">
												<div className="msg-setting">
													<i className="ti-more-alt"></i>
												</div>
												<div className="msg-dropdown">
													<ul>
														<li>
															<a href="#">
																<i className="fa fa-share"></i>forward
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-clone"></i>copy
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-star-o"></i>rating
															</a>
														</li>
														<li>
															<a href="#">
																<i className="ti-trash"></i>delete
															</a>
														</li>
													</ul>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</li>
					<li className="replies">
						<div className="media">
							<div className="profile mr-4">
								<img
									className="bg-img"
									src="/assets/images/avtar/1.jpg"
									alt="Avatar"
								/>
							</div>
							<div className="media-body">
								<div className="contact-name">
									<h5>Alan josheph</h5>
									<h6>01:45 AM</h6>
									<ul className="msg-box">
										<li className="msg-setting-main">
											<div className="msg-dropdown-main">
												<div className="msg-setting">
													<i className="ti-more-alt"></i>
												</div>
												<div className="msg-dropdown">
													<ul>
														<li>
															<a href="#">
																<i className="fa fa-share"></i>forward
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-clone"></i>copy
															</a>
														</li>
														<li>
															<a href="#">
																<i className="fa fa-star-o"></i>rating
															</a>
														</li>
														<li>
															<a href="#">
																<i className="ti-trash"></i>delete
															</a>
														</li>
													</ul>
												</div>
											</div>
											<h5>
												If you have any other query then feel free to ask us.
											</h5>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default GroupChat;
