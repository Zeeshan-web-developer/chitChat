const NewGroupChat = () => {
	return (
		<div className="messages custom-scroll" id="group_blank">
			<div className="contact-details">
				<div className="row">
					<div className="col">
						<div className="media left">
							<div className="media-left mr-3">
								<div className="profile online menu-trigger">
									<img
										className="bg-img"
										src="/assets/images/avtar/family.jpg"
										alt="Avatar"
									/>
								</div>
							</div>
							<div className="media-body">
								<h5>Family Ties</h5>
								<h6>Last Seen 2 hours</h6>
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
									data-tippy-content="Quick Audio Call"
									data-toggle="modal"
									data-target="#confercall"
								>
									<Phone />
								</a>
							</li>
							<li>
								<a
									className="icon-btn btn-light button-effect"
									href="#"
									data-tippy-content="Quick Video Call"
									data-toggle="modal"
									data-target="#confvideocl"
								>
									<Video />
								</a>
							</li>
							<li>
								<a
									className="icon-btn btn-light button-effect apps-toggle"
									href="#"
									onClick={() => OpenAppSidebar()}
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

export default NewGroupChat;
