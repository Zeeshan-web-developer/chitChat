const NewChat = () => {
	return (
		<div className="messages custom-scroll" id="blank">
			<div className="contact-details">
				<div className="row">
					<div className="col">
						<div className="media left">
							<div className="media-left mr-3">
								<div className="profile online menu-trigger">
									<img
										className="bg-img"
										src="/assets/images/contact/2.jpg"
										alt="Avatar"
									/>
								</div>
							</div>
							<div className="media-body">
								<h5>Josephin water</h5>
								<h6>Last Seen 5 hours</h6>
							</div>
							<div className="media-right">
								<ul>
									<li>
										<a
											className="icon-btn btn-light button-effect mute"
											href="#"
											onClick={() => setVolumOnOff(!VolumOnOff)}
										>
											<i
												className={`fa fa-volume-up ${VolumOnOff ? "off" : ""}`}
											></i>
										</a>
									</li>
									<li>
										<a
											className="icon-btn btn-light search search-right"
											href="#"
											onClick={() => setSearch(!search)}
										>
											{" "}
											<Search />
										</a>
										<form
											className={`form-inline search-form ${
												search ? "open" : ""
											}`}
										>
											<div className="form-group">
												<input
													className="form-control-plaintext"
													type="search"
													placeholder="Search.."
												/>
												<div
													className="icon-close close-search"
													onClick={() => setSearch(false)}
												>
													{" "}
												</div>
											</div>
										</form>
									</li>
									<li>
										<a
											className="icon-btn btn-light button-effect mobile-sidebar"
											href="#"
										>
											<ChevronLeft />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col">
						<ul className="calls text-right">
							<li>
								<a
									className="icon-btn btn-light button-effect"
									href="#"
									onClick={() => setCallModal(!callModal)}
								>
									<Phone />
								</a>
								<Modal
									isOpen={callModal}
									toggle={() => setCallModal(!callModal)}
									className="fade show"
									centered
								>
									<ModalBody className="p-0">
										<div className="audiocall1 call-modal">
											<img
												className="bg-img"
												src="/assets/images/avtar/big/audiocall.jpg"
												alt="Avatar"
											/>
											<div className="center-con text-center">
												<div className="title2">Josephin water</div>
												<h6>log angelina california</h6>
												<ul>
													<li>
														<a
															className="icon-btn btn-success button-effect btn-xl is-animating"
															href="#"
														>
															{" "}
															<Phone />
														</a>
													</li>
													<li>
														<a
															className="icon-btn btn-danger button-effect btn-xl is-animating cancelcall"
															href="#"
															data-dismiss="modal"
														>
															{" "}
															<Phone />
														</a>
													</li>
												</ul>
											</div>
										</div>
									</ModalBody>
								</Modal>
							</li>
							<li>
								<a
									className="icon-btn btn-light button-effect"
									href="#"
									onClick={() => setVideoModal(!videoModal)}
								>
									<Video />
								</a>
								<Modal
									className="viddiolog fade show"
									isOpen={videoModal}
									toggle={() => setVideoModal(!videoModal)}
									centered
								>
									<ModalBody>
										<div className="videocall call-modal">
											<img
												className="bg-img"
												src="/assets/images/avtar/big/videocall_bg.jpg"
												alt="Avatar"
											/>
											<div className="small-image">
												<img
													className="bg-img"
													src="/assets/images/avtar/big/videocall.jpg"
													alt="Avatar"
												/>
											</div>
											<div className="media videocall-details">
												<div className="usersprof">
													<div
														className="profile"
														style={{
															backgroundImage: `url('assets/images/avtar/2.jpg')`,
															backgroundSize: "cover",
															backgroundPosition: "center",
															display: "block",
														}}
													></div>
													<div
														className="profile"
														style={{
															backgroundImage: `url('assets/images/avtar/3.jpg')`,
															backgroundSize: "cover",
															backgroundPosition: "center",
															display: "block",
														}}
													></div>
												</div>
												<div className="media-body">
													<h5>Josephin water</h5>
													<h6>America ,California</h6>
												</div>
												<div id="basicUsage">00:00:00</div>
												<div className="zoomcontent">
													<a
														className="text-dark"
														href="#!"
														onClick="javascript:toggleFullScreen()"
														data-tippy-content="Zoom Screen"
													>
														<img
															src="/assets/images/logo/maximize.svg"
															alt="zoom screen"
														/>
													</a>
												</div>
											</div>
											<div className="center-con text-center">
												<ul>
													<li>
														<a
															className="icon-btn btn-light button-effect pause"
															href="#"
															data-tippy-content="Hold"
														>
															<i className="ti-control-pause"></i>
														</a>
													</li>
													<li>
														<a
															className="icon-btn btn-danger button-effect btn-xl is-animating"
															href="#"
															onClick={() => setVideoModal(!videoModal)}
														>
															{" "}
															<Phone />
														</a>
													</li>
													<li>
														<a
															className="icon-btn btn-light button-effect mic"
															href="#"
															data-tippy-content="Mute"
														>
															<i className="fa fa-microphone"></i>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</ModalBody>
								</Modal>
							</li>
							<li>
								<a
									className="icon-btn btn-light button-effect apps-toggle"
									href="#"
									onClick={() => OpenAppSidebar(toggleSmallSide)}
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
								<div
									className="chat-frind-content"
									style={
										quickAction ? { display: "block" } : { display: "none" }
									}
								>
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
				<div className="rightchat animat-rate">
					<div className="bg_circle">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className="cross"></div>
					<div className="cross1"></div>
					<div className="cross2"></div>
					<div className="dot"></div>
					<div className="dot1"> </div>
				</div>
			</div>
			<div className="call-list-center">
				<img src="/assets/images/chat.png" alt="" />
				<div className="animated-bg">
					<i></i>
					<i></i>
					<i></i>
				</div>
				<p>Select a chat to read messages</p>
			</div>
		</div>
	);
};

export default NewChat;
