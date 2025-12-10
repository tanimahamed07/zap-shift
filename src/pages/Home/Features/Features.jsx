import React from "react";

const Features = () => {
  return (
    <div class="p-6">
      <div class="space-y-6">
        <div class="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-sm border border-transparent dark:border-gray-700/50">
          <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="flex-shrink-0">
              <img
                alt="Illustration of people tracking a delivery truck and packages on a map"
                class="w-28 h-28 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeTWE4p2o542hq65X9ld-5A4XjbL0rp9kyxXN5nOAmNdOj9sV8_CJ_-RmC43uD0PMdNrkmboFBRf5kXtdS1TRRwgpf0uWqpeLElHMrvOcIDoLph9oh_QRVYV3KbYR7ciQV1vLBRTAtwLFmUApe1sXdQyhtzmRpkTrg8HfvfYbgesQkWLx_rTeHcCj22kMmApQn2Zw0w-oiED8lu0Du2_k-f531kkjM_D2YF9l-X-7--MEoVyvvNfAs5XwPNQmKvtpV2MwRVmW50eHl"
              />
            </div>
            <div class="text-center sm:text-left">
              <h2 class="text-base sm:text-lg md:text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                Live Parcel Tracking
              </h2>
              <p class="text-sm sm:text-base md:text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                Stay updated in real-time with our live parcel tracking feature.
                From pick-up to delivery, monitor your shipment's journey and
                get instant status updates for complete peace of mind.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-sm border border-primary">
          <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="flex-shrink-0">
              <img
                alt="Illustration of a person on the phone holding a package securely"
                class="w-28 h-28 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk41E_dW07scS7voTnYo9TUe_jXZE15mrl07LJvzBj2nseUBL7ZTiOSi18CRDtWDxncL5wPJPwtxXElGYJDBtqalemKrIi18EXo_JAHdiotsZxSDu4qZMt5oMrzfSipmB5AtSKDVUKSIDUQdTmw5LSUcr0Cq_h_DCJ8kffZcY6fztOXX8OsStj3uTqFx_CDyHhsv_T4pIgVkcR-D-snedxqJoS2GdTLIs4pAMhEP0rIA1xYR9Vx3DMhb3cyzxVnulhKT0Gr1PSF63n"
              />
            </div>
            <div class="text-center sm:text-left">
              <h2 class="text-base sm:text-lg md:text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                100% Safe Delivery
              </h2>
              <p class="text-sm sm:text-base md:text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                We ensure your parcels are handled with the utmost care and
                delivered securely to their destination. Our reliable process
                guarantees safe and damage-free delivery every time.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-sm border border-transparent dark:border-gray-700/50">
          <div class="flex flex-col sm:flex-row items-center gap-6">
            <div class="flex-shrink-0">
              <img
                alt="Illustration of a support agent on the phone with a package"
                class="w-28 h-28 object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRLVZY6ekgK0GobR6d3aAISOa7AH7_CsfLWt93rQ-6QU3RyFvT8D5jPJDE8JNUNO3uAK9kMJgBftnuAJNu7u7Pj_qPpJVZYOmuF_YDlXbdEJ5sI3j97KJI19pu6m6A50YiBLAiOgtrO0tYFjkFlV-mDAjQILVDwhTg0Q1qgXlhMDtdnQ2wdZYOnUN0WKQHqxHkU3mt0ZvpKimM4Vp0MdcQ9fsc6JC5QQLfZ7d1KFpuyJuF-v3bKB6tyesS99YxFcC__QIOqDk1FVum"
              />
            </div>
            <div class="text-center sm:text-left">
              <h2 class="text-base sm:text-lg md:text-xl font-bold text-text-light-primary dark:text-text-dark-primary mb-2">
                24/7 Call Center Support
              </h2>
              <p class="text-sm sm:text-base md:text-lg text-text-light-secondary dark:text-text-dark-secondary leading-relaxed">
                Our dedicated support team is available around the clock to
                assist you with any questions, updates, or delivery
                concerns—anytime you need us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
